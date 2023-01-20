// класс, который строит страницу

class HTMLBuilder {
  constructor(tagName, ...classNames) {
    // создаем главную обертку и помещаем ее в body:
    this.wrapper = document.createElement(tagName);
    this.wrapper.classList.add(...classNames);
    document.body.appendChild(this.wrapper);
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
    arrOfAttributes = null,
    arrOfClassNames = null,
    n = 1,
    elsInfo = null,
  ) {
    let child;
    let { parent } = this;
    /* из Map с информацией об объектах (в нашем случае клавишах)
    создаем массив c ключами (они будут id-шниками будущих DOM-элементов): */
    const idList = elsInfo ? Array.from(elsInfo.keys()) : null;
    const classList = elsInfo ? Array.from(elsInfo.values()).map((obj) => obj.classNames) : null;
    // создадим на всякий случай контейнер как свойство объекта первого уровня:
    this.container = [];
    while (parent.hasChildNodes()) {
      /* если в родителе уже есть дочерний элемент,
      этот дочерний элемент становится родителем следующему дочернему элементу: */
      parent = parent.firstElementChild;
    }
    for (let i = 0; i < n; i += 1) {
      child = document.createElement(tagName);
      if (arrOfClassNames) child.classList.add(...arrOfClassNames);
      if (arrOfAttributes) {
        for (let j = 0; j < arrOfAttributes.length; j += 1) {
          child.setAttribute(arrOfAttributes[i][0], arrOfAttributes[i][1]);
        }
      }
      if (classList) child.classList.add(...classList[i]);
      if (idList) child.setAttribute('id', idList[i]);
      parent.appendChild(child);
      /* если создаем несколько идентичных элементов, положим ссылку на них в свойство-контейнер,
      чтобы легко получить доступ к ним (как иначе получить доступ к ним из класса - хз): */
      this.container.push(child);
    }
    return this;
  }

  // возможно, внутрь элементов в контейнере нужно будет добавить что-то идентичное:
  addIdenticalChilds(
    parentClassName,
    childTagName,
    num = 1,
    arrOfAttributes = null,
    arrOfClassNames = null,
  ) {
    let count = num;
    // dвыбираем родителей из контейнера по заданному классу
    this.container.forEach((el) => {
      if (el.classList.contains(parentClassName)) {
        this.setParent.call(el, 'fragment');
        do {
          this.createElement.call(el, childTagName, arrOfAttributes, arrOfClassNames);
          this.becomeChildOf.call(el, el);
          count -= 1;
        }
        while (count > 0);
      }
    });
    // const parentArr = this.container.filter((el) => el.classList.contains(parentClassName));
    // parentArr.forEach((el) => {
    //   this.setParent.call(el, 'fragment');
    //   do {
    //     this.createElement.call(el, childTagName, arrOfAttributes, arrOfClassNames);
    //     this.becomeChildOf.call(el, el);
    //     count -= 1;
    //   }
    //   while (count > 0);
    // });
  }

  // выберем родителя для созданной цепочки элементов:
  becomeChildOf(parent) {
    parent.appendChild(this.parent);
  }

  fillElements(className, elsInfo, propName) {
    // получаем массив необходимых нам элементов иэ контейнера по их классу:
    const els = this.container.filter((el) => el.classList.contains(className));
    for (let i = 0; i < els.length; i += 1) {
      const targetInfo = elsInfo.get(els[i].id || this.id);
      els[i].innerHTML = targetInfo[`${propName}`];
    }
  }
}

// создаем обертку
const keyboard = new HTMLBuilder('div', 'keyboard');

keyboard.setParent('fragment')
  .createElement('div', null, ['keyboard-screen'])
  .createElement('output', null, ['screen-text'])
  .becomeChildOf(keyboard.wrapper);
keyboard.setParent('fragment')
  .createElement('div', null, ['keys-area'])
  .createElement('button', null, ['key'], keysInfo.size, keysInfo)
  .becomeChildOf(keyboard.wrapper);

keyboard.fillElements('mod', keysInfo, 'enValue');

// console.log(keyboard.wrapper); // <---- вот этот консоль лог
// попеременно выводит keyboard.wrapper в виде объекта и тега

function fillOnLang(lang) {
  if (lang === 'EN') {
    keyboard.fillElements('char', keysInfo, 'enValue');
    keyboard.addIdenticalChilds('char', 'span', 1, null, ['add-char']);

    // заполняем эти спаны символами
    keyboard.container.forEach((btn) => {
      if (btn.classList.contains('char')) {
        keyboard.fillElements.call(btn, 'add-char', keysInfo, 'addEnValue');
      }
    });
  }
}
fillOnLang('EN');