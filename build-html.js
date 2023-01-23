// Map с данными о каждой клавише:

// const keysInfo = new Map([
//   ['Backquote', {
//     enValue: '§', ruValue: '>', addEnValue: '±', addRuValue: '<', classNames: ['key', 'char'],
//   }],
//   ['Digit1', {
//     enValue: '1', ruValue: '1', addEnValue: '!', addRuValue: '!', classNames: ['key', 'char', 'num'],
//   }],
//   ['Digit2', {
//     enValue: '2', ruValue: '2', addEnValue: '@', addRuValue: '"', classNames: ['key', 'char', 'num'],
//   }],
//   ['Digit3', {
//     enValue: '3', ruValue: '3', addEnValue: '#', addRuValue: '№', classNames: ['key', 'char', 'num'],
//   }],
//   ['Digit4', {
//     enValue: '4', ruValue: '4', addEnValue: '$', addRuValue: '%', classNames: ['key', 'char', 'num'],
//   }],
//   ['Digit5', {
//     enValue: '5', ruValue: '5', addEnValue: '%', addRuValue: ':', classNames: ['key', 'char', 'num'],
//   }],
//   ['Digit6', {
//     enValue: '6', ruValue: '6', addEnValue: '^', addRuValue: ',', classNames: ['key', 'char', 'num'],
//   }],
//   ['Digit7', {
//     enValue: '7', ruValue: '7', addEnValue: '&', addRuValue: '.', classNames: ['key', 'char', 'num'],
//   }],
//   ['Digit8', {
//     enValue: '8', ruValue: '8', addEnValue: '*', addRuValue: ';', classNames: ['key', 'char', 'num'],
//   }],
//   ['Digit9', {
//     enValue: '9', ruValue: '9', addEnValue: '(', addRuValue: '(', classNames: ['key', 'char', 'num'],
//   }],
//   ['Digit0', {
//     enValue: '0', ruValue: '0', addEnValue: ')', addRuValue: ')', classNames: ['key', 'char', 'num'],
//   }],
//   ['Minus', {
//     enValue: '-', ruValue: '-', addEnValue: '_', addRuValue: '_', classNames: ['key', 'char', 'num'],
//   }],
//   ['Equal', {
//     enValue: '=', ruValue: '=', addEnValue: '+', addRuValue: '+', classNames: ['key', 'char', 'num'],
//   }],
//   ['Backspace', {
//     enValue: '', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['key', 'mod'],
//   }],
//   ['Tab', {
//     enValue: '  ', ruValue: '  ', addEnValue: '', addRuValue: '', classNames: ['key', 'mod'],
//   }],
//   ['KeyQ', {
//     enValue: 'Q', ruValue: 'й', addEnValue: '', addRuValue: '', classNames: ['key', 'char', 'en-lttr', 'ru-lttr'],
//   }],
//   ['KeyW', {
//     enValue: 'W', ruValue: 'ц', addEnValue: '', addRuValue: '', classNames: ['key', 'char', 'en-lttr', 'ru-lttr'],
//   }],
//   ['KeyE', {
//     enValue: 'E', ruValue: 'у', addEnValue: '', addRuValue: '', classNames: ['key', 'char', 'en-lttr', 'ru-lttr'],
//   }],
//   ['KeyR', {
//     enValue: 'R', ruValue: 'к', addEnValue: '', addRuValue: '', classNames: ['key', 'char', 'en-lttr', 'ru-lttr'],
//   }],
//   ['KeyT', {
//     enValue: 'T', ruValue: 'е', addEnValue: '', addRuValue: '', classNames: ['key', 'char', 'en-lttr', 'ru-lttr'],
//   }],
//   ['KeyY', {
//     enValue: 'Y', ruValue: 'н', addEnValue: '', addRuValue: '', classNames: ['key', 'char', 'en-lttr', 'ru-lttr'],
//   }],
//   ['KeyU', {
//     enValue: 'U', ruValue: 'г', addEnValue: '', addRuValue: '', classNames: ['key', 'char', 'en-lttr', 'ru-lttr'],
//   }],
//   ['KeyI', {
//     enValue: 'I', ruValue: 'ш', addEnValue: '', addRuValue: '', classNames: ['key', 'char', 'en-lttr', 'ru-lttr'],
//   }],
//   ['KeyO', {
//     enValue: 'O', ruValue: 'щ', addEnValue: '', addRuValue: '', classNames: ['key', 'char', 'en-lttr', 'ru-lttr'],
//   }],
//   ['KeyP', {
//     enValue: 'P', ruValue: 'з', addEnValue: '', addRuValue: '', classNames: ['key', 'char', 'en-lttr', 'ru-lttr'],
//   }],
//   ['BracketLeft', {
//     enValue: '[', ruValue: 'х', addEnValue: '{', addRuValue: '', classNames: ['key', 'char', 'ru-lttr'],
//   }],
//   ['BracketRight', {
//     enValue: ']', ruValue: 'ъ', addEnValue: '}', addRuValue: '', classNames: ['key', 'char', 'ru-lttr'],
//   }],
//   ['Backslash', {
//     enValue: '\u002F', ruValue: 'ё', addEnValue: '|', addRuValue: '', classNames: ['key', 'char', 'ru-lttr'],
//   }],
//   ['CapsLock', {
//     enValue: '', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['key', 'mod'],
//   }],
//   ['KeyA', {
//     enValue: 'A', ruValue: 'ф', addEnValue: '', addRuValue: '', classNames: ['key', 'char', 'en-lttr', 'ru-lttr'],
//   }],
//   ['KeyS', {
//     enValue: 'S', ruValue: 'ы', addEnValue: '', addRuValue: '', classNames: ['key', 'char', 'en-lttr', 'ru-lttr'],
//   }],
//   ['KeyD', {
//     enValue: 'D', ruValue: 'в', addEnValue: '', addRuValue: '', classNames: ['key', 'char', 'en-lttr', 'ru-lttr'],
//   }],
//   ['KeyF', {
//     enValue: 'F', ruValue: 'а', addEnValue: '', addRuValue: '', classNames: ['key', 'char', 'en-lttr', 'ru-lttr'],
//   }],
//   ['KeyG', {
//     enValue: 'G', ruValue: 'п', addEnValue: '', addRuValue: '', classNames: ['key', 'char', 'en-lttr', 'ru-lttr'],
//   }],
//   ['KeyH', {
//     enValue: 'H', ruValue: 'р', addEnValue: '', addRuValue: '', classNames: ['key', 'char', 'en-lttr', 'ru-lttr'],
//   }],
//   ['KeyJ', {
//     enValue: 'J', ruValue: 'о', addEnValue: '', addRuValue: '', classNames: ['key', 'char', 'en-lttr', 'ru-lttr'],
//   }],
//   ['KeyK', {
//     enValue: 'K', ruValue: 'л', addEnValue: '', addRuValue: '', classNames: ['key', 'char', 'en-lttr', 'ru-lttr'],
//   }],
//   ['KeyL', {
//     enValue: 'L', ruValue: 'д', addEnValue: '', addRuValue: '', classNames: ['key', 'char', 'en-lttr', 'ru-lttr'],
//   }],
//   ['Semicolon', {
//     enValue: ';', ruValue: 'ж', addEnValue: ':', addRuValue: '', classNames: ['key', 'char', 'ru-lttr'],
//   }],
//   ['Quote', {
//     enValue: '\'', ruValue: 'э', addEnValue: '"', addRuValue: '', classNames: ['key', 'char', 'ru-lttr'],
//   }],
//   ['Enter', {
//     enValue: '', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['key', 'mod'],
//   }],
//   ['ShiftLeft', {
//     enValue: '', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['key', 'mod'],
//   }],
//   ['IntlBackslash', {
//     enValue: '`', ruValue: ']', addEnValue: '~', addRuValue: '[', classNames: ['key', 'char'],
//   }],
//   ['KeyZ', {
//     enValue: 'Z', ruValue: 'я', addEnValue: '', addRuValue: '', classNames: ['key', 'char', 'en-lttr', 'ru-lttr'],
//   }],
//   ['KeyX', {
//     enValue: 'X', ruValue: 'ч', addEnValue: '', addRuValue: '', classNames: ['key', 'char', 'en-lttr', 'ru-lttr'],
//   }],
//   ['KeyC', {
//     enValue: 'C', ruValue: 'с', addEnValue: '', addRuValue: '', classNames: ['key', 'char', 'en-lttr', 'ru-lttr'],
//   }],
//   ['KeyV', {
//     enValue: 'V', ruValue: 'м', addEnValue: '', addRuValue: '', classNames: ['key', 'char', 'en-lttr', 'ru-lttr'],
//   }],
//   ['KeyB', {
//     enValue: 'B', ruValue: 'и', addEnValue: '', addRuValue: '', classNames: ['key', 'char', 'en-lttr', 'ru-lttr'],
//   }],
//   ['KeyN', {
//     enValue: 'N', ruValue: 'т', addEnValue: '', addRuValue: '', classNames: ['key', 'char', 'en-lttr', 'ru-lttr'],
//   }],
//   ['KeyM', {
//     enValue: 'M', ruValue: 'ь', addEnValue: '', addRuValue: '', classNames: ['key', 'char', 'en-lttr', 'ru-lttr'],
//   }],
//   ['Comma', {
//     enValue: ',', ruValue: 'б', addEnValue: '<', addRuValue: '', classNames: ['key', 'char', 'en-lttr', 'ru-lttr'],
//   }],
//   ['Period', {
//     enValue: '.', ruValue: 'ю', addEnValue: '>', addRuValue: '', classNames: ['key', 'char', 'ru-lttr'],
//   }],
//   ['Slash', {
//     enValue: '/', ruValue: '/', addEnValue: '?', addRuValue: '?', classNames: ['key', 'char'],
//   }],
//   ['ShiftRight', {
//     enValue: '', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['key', 'mod'],
//   }],
//   ['Fn', {
//     enValue: '', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['key', 'mod'],
//   }],
//   ['ControlLeft', {
//     enValue: 'control', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['key', 'mod'],
//   }],
//   ['AltLeft', {
//     enValue: 'option', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['key', 'mod'],
//   }],
//   ['MetaLeft', {
//     enValue: 'command', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['key', 'mod'],
//   }],
//   ['Space', {
//     enValue: ' ', ruValue: ' ', addEnValue: '', addRuValue: '', classNames: ['key', 'mod'],
//   }],
//   ['MetaRight', {
//     enValue: 'command', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['key', 'mod'],
//   }],
//   ['AltRight', {
//     enValue: 'option', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['key', 'mod'],
//   }],
//   ['ArrowLeft', {
//     enValue: '', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['key', 'mod'],
//   }],
//   ['ArrowContainer', {
//     enValue: '', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['container'],
//   }],
//   ['ArrowRight', {
//     enValue: '', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['key', 'mod'],
//   }],
// ]);

// const arrowContainer = new Map([
//   ['ArrowUp', {
//     enValue: '', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['key', 'mod'],
//   }],
//   ['ArrowDown', {
//     enValue: '', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['key', 'mod'],
//   }],
// ]);

// пару дополнительных функций:

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
  .fillWithContent('mod', keysInfo, 'enValue')
  .cleanContainer();

keyboard.setParent('fragment')
  .createElement('button', 'key', null, arrowContainer.size)
  .becomeChildOf('#ArrowContainer');

const arrowIDlist = Array.from(arrowContainer.keys());

keyboard.setAttrs(arrowIDlist, arrowContainer)
  .fillWithContent('mod', arrowContainer, 'enValue')
  .cleanContainer();

// console.log(keyboard.wrapper); // <---- вот этот консоль лог
// попеременно выводит keyboard.wrapper в виде объекта и тега

function switchTo(lang, elsInfo) {
  const chars = Array.from(document.querySelectorAll('.char'));
  if (lang === 'EN') {
    fillWithContent(elsInfo, chars, 'enValue');
    createAddEls(chars, 'span', elsInfo, 'addEnValue');
  }
  if (lang === 'RU') {
    fillWithContent(elsInfo, chars, 'ruValue');
    createAddEls(chars, 'span', elsInfo, 'addRuValue');
  }
}
switchTo('EN', keysInfo);
