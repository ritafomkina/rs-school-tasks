// класс, который строит страницу

class HTMLBuilder {
  constructor(tagName, ...classNames) {
    // создаем главную обертку и помещаем ее в body:
    this.wrapper = document.createElement(tagName);
    this.wrapper.classList.add(...classNames);
    document.body.appendChild(this.wrapper);
    // создадим на всякий случай контейнер как свойство объекта первого уровня:
    this.container = [];
  }

  // создаем роидтеля для детей и потомков:
  setParent(parent) {
    this.parent = parent === 'fragment'
      ? document.createDocumentFragment()
      : document.createElement(parent);
    return this;
  }

  // создаем дочерний элемент в родителе
  createElement(
    tagName,
    className = null,
    attributes = null,
    num = 1,
  ) {
    let count = num;
    let child;
    let { parent } = this;
    while (parent.hasChildNodes()) {
      /* если в родителе уже есть дочерний элемент,
      этот дочерний элемент становится родителем следующему дочернему элементу: */
      parent = parent.firstElementChild;
    }
    do {
      child = document.createElement(tagName);
      if (className) child.classList.add(className);
      if (attributes) child.setAttribute(attributes[0], attributes[1]);
      count -= 1;
      parent.appendChild(child);
      /* если создаем несколько идентичных элементов, положим ссылку на них в свойство-контейнер,
      чтобы легко получить доступ к ним (как иначе получить доступ к ним из класса - хз): */
      if (num > 1) this.container.push(child);
    } while (count > 0);
    return this;
  }

  // выберем родителя для созданной цепочки элементов:
  becomeChildOf(parent) {
    parent.appendChild(this.parent);
  }

  setID(IDlist) {
    this.container.forEach((el, i) => el.setAttribute('id', IDlist[i]));
  }

  setClass(objInfo) {
    this.container.forEach((el) => {
      const elInObj = objInfo.get(el.id);
      el.classList.add(...elInObj.classNames);
    });
  }

  addIdenticalChilds(
    elsInfo,
    propName,
    childTagName,
    childNum = 1,
  ) {
    let count = childNum;
    this.container.forEach((el) => {
      const elInObj = elsInfo.get(el.id);
      if (elInObj[propName]) {
        do {
          const child = document.createElement(childTagName);
          child.innerHTML = elInObj[propName];
          el.appendChild(child);
          count -= 1;
        } while (count > 0);
      }
    });
  }

  fillElements(className, elsInfo, propName) {
    // получаем массив необходимых нам элементов иэ контейнера по их классу:
    const els = this.container.filter((el) => el.classList.contains(className));
    console.log(els);
    for (let i = 0; i < els.length; i += 1) {
      const targetInfo = elsInfo.get(els[i].id);
      els[i].innerHTML = targetInfo[propName];
    }
  }
}

function loadScript(src) {
  return new Promise (() => {
    const script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
  });
}
// создаем обертку
const keyboard = new HTMLBuilder('div', 'keyboard');

keyboard.setParent('fragment')
  .createElement('div', 'keyboard-screen')
  .createElement('output', 'screen-text')
  .becomeChildOf(keyboard.wrapper);

keyboard.setParent('fragment')
  .createElement('div', 'keys-area')
  .createElement('button', 'key', null, keysInfo.size)
  .becomeChildOf(keyboard.wrapper);

const IDlist = Array.from(keysInfo.keys());

keyboard.setID(IDlist);
keyboard.setClass(keysInfo);
keyboard.fillElements('mod', keysInfo, 'enValue');



// const arrowDiv = document.getElementById('#ArrowContainer');

// keyboard.setParent.call(arrowDiv, 'fragment');
// keyboard.createElement.call(arrowDiv, 'button', 'key', null, arrowContainer.size);
// keyboard.becomeChildOf.call(arrowDiv,arrowDiv);
// keyboard.fillElements('container', arrowContainer, 'enValue');
// console.log(keyboard.wrapper); // <---- вот этот консоль лог
// попеременно выводит keyboard.wrapper в виде объекта и тега

function fillIn(lang) {
  if (lang === 'EN') {
    keyboard.fillElements('char', keysInfo, 'enValue');
    keyboard.addIdenticalChilds(keysInfo, 'addEnValue', 'span');
  }
  if (lang === 'RU') {
    keyboard.fillElements('char', keysInfo, 'ruValue');
    keyboard.addIdenticalChilds(keysInfo, 'addRuValue', 'span');
  }
}
fillIn('EN');
// console.log(keysInfo.size);