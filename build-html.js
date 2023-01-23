// пару дополнительных функций:

// function getKeyData() {
//   return new Promise(() =>);
// }

function fillWithContent(elsInfo, els, propName) {
  els.forEach((el) => {
    const elem = el;
    const targetInfo = elsInfo.get(el.id);
    elem.innerHTML = targetInfo[propName];
  });
}

function createAddEls(parentEl, childTagName, elsInfo, propName) {
  parentEl.forEach((char) => {
    const targetInfo = elsInfo.get(char.id);
    if (targetInfo[propName]) {
      const child = document.createElement(childTagName);
      child.innerHTML = targetInfo[propName];
      char.appendChild(child);
    }
  });
}

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
  setParent(source) {
    this.source = source === 'fragment'
      ? document.createDocumentFragment()
      : document.createElement(source);
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
    let { source } = this;
    while (source.hasChildNodes()) {
      /* если в родителе уже есть дочерний элемент,
      этот дочерний элемент становится родителем следующему дочернему элементу: */
      source = source.firstElementChild;
    }
    do {
      child = document.createElement(tagName);
      if (className) child.classList.add(className);
      if (attributes) child.setAttribute(attributes[0], attributes[1]);
      count -= 1;
      source.appendChild(child);
      /* если создаем несколько идентичных элементов, положим ссылку на них в свойство-контейнер,
      чтобы легко получить доступ к ним: */
      this.container.push(child);
    } while (count > 0);
    return this;
  }

  cleanContainer() {
    this.container = [];
    return this;
  }

  // выберем родителя для созданной цепочки элементов:
  becomeChildOf(parentSelector) {
    const parent = document.querySelector(parentSelector);
    parent.append(this.source);
    return this;
  }

  setAttrs(IDlist, elsInfo) {
    this.container.forEach((el, i) => {
      el.setAttribute('id', IDlist[i]);
      const elInObj = elsInfo.get(el.id);
      el.classList.add(...elInObj.classNames);
    });
    return this;
  }

  fillWithContent(className, elsInfo, propName) {
    // получаем массив необходимых нам элементов иэ контейнера по их классу:
    const els = this.container.filter((el) => el.classList.contains(className));
    // вызывае внешнюю функцию с массивом элементов:
    fillWithContent(elsInfo, els, propName);
    return this;
  }
}

// создаем обертку
const keyboard = new HTMLBuilder('div', 'keyboard');

keyboard.setParent('fragment')
  .createElement('div', 'keyboard-screen')
  .createElement('output', 'screen-text')
  .becomeChildOf('.keyboard');

keyboard.setParent('fragment')
  .createElement('div', 'keys-area')
  .cleanContainer()
  .createElement('button', null, null, keysInfo.size)
  .becomeChildOf('.keyboard');

const IDlist = Array.from(keysInfo.keys());

keyboard.setAttrs(IDlist, keysInfo)
  .fillWithContent('mod', keysInfo, 'ENValue')
  .cleanContainer();

keyboard.setParent('fragment')
  .createElement('button', 'key', null, arrowContainer.size)
  .becomeChildOf('#ArrowContainer');

const arrowIDlist = Array.from(arrowContainer.keys());

keyboard.setAttrs(arrowIDlist, arrowContainer)
  .fillWithContent('mod', arrowContainer, 'ENValue')
  .cleanContainer();

// console.log(keyboard.wrapper); // <---- вот этот консоль лог
// попеременно выводит keyboard.wrapper в виде объекта и тега

function switchTo(lang, elsInfo) {
  const chars = Array.from(document.querySelectorAll('.char'));
  if (lang === 'EN') {
    fillWithContent(elsInfo, chars, 'ENValue');
    createAddEls(chars, 'span', elsInfo, 'addENValue');
  }
  if (lang === 'RU') {
    fillWithContent(elsInfo, chars, 'RUValue');
    createAddEls(chars, 'span', elsInfo, 'addRUValue');
  }
}
switchTo('EN', keysInfo);
