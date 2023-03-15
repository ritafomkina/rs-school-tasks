// Map с данными о каждой клавише:

const keysInfo = new Map([
  ['Backquote', {
    ENValue: '§', RUValue: '>', addENValue: '±', addRUValue: '<', classNames: ['key', 'char'],
  }],
  ['Digit1', {
    ENValue: '1', RUValue: '1', addENValue: '!', addRUValue: '!', classNames: ['key', 'char', 'num'],
  }],
  ['Digit2', {
    ENValue: '2', RUValue: '2', addENValue: '@', addRUValue: '"', classNames: ['key', 'char', 'num'],
  }],
  ['Digit3', {
    ENValue: '3', RUValue: '3', addENValue: '#', addRUValue: '№', classNames: ['key', 'char', 'num'],
  }],
  ['Digit4', {
    ENValue: '4', RUValue: '4', addENValue: '$', addRUValue: '%', classNames: ['key', 'char', 'num'],
  }],
  ['Digit5', {
    ENValue: '5', RUValue: '5', addENValue: '%', addRUValue: ':', classNames: ['key', 'char', 'num'],
  }],
  ['Digit6', {
    ENValue: '6', RUValue: '6', addENValue: '^', addRUValue: ',', classNames: ['key', 'char', 'num'],
  }],
  ['Digit7', {
    ENValue: '7', RUValue: '7', addENValue: '&', addRUValue: '.', classNames: ['key', 'char', 'num'],
  }],
  ['Digit8', {
    ENValue: '8', RUValue: '8', addENValue: '*', addRUValue: ';', classNames: ['key', 'char', 'num'],
  }],
  ['Digit9', {
    ENValue: '9', RUValue: '9', addENValue: '(', addRUValue: '(', classNames: ['key', 'char', 'num'],
  }],
  ['Digit0', {
    ENValue: '0', RUValue: '0', addENValue: ')', addRUValue: ')', classNames: ['key', 'char', 'num'],
  }],
  ['Minus', {
    ENValue: '-', RUValue: '-', addENValue: '_', addRUValue: '_', classNames: ['key', 'char', 'num'],
  }],
  ['Equal', {
    ENValue: '=', RUValue: '=', addENValue: '+', addRUValue: '+', classNames: ['key', 'char', 'num'],
  }],
  ['Backspace', {
    ENValue: '', RUValue: '', addENValue: '', addRUValue: '', classNames: ['key', 'mod'],
  }],
  ['Tab', {
    ENValue: '  ', RUValue: '  ', addENValue: '', addRUValue: '', classNames: ['key', 'mod'],
  }],
  ['KeyQ', {
    ENValue: 'Q', RUValue: 'Й', addENValue: '', addRUValue: '', classNames: ['key', 'char', 'EN-lttr', 'RU-lttr'],
  }],
  ['KeyW', {
    ENValue: 'W', RUValue: 'Ц', addENValue: '', addRUValue: '', classNames: ['key', 'char', 'EN-lttr', 'RU-lttr'],
  }],
  ['KeyE', {
    ENValue: 'E', RUValue: 'У', addENValue: '', addRUValue: '', classNames: ['key', 'char', 'EN-lttr', 'RU-lttr'],
  }],
  ['KeyR', {
    ENValue: 'R', RUValue: 'К', addENValue: '', addRUValue: '', classNames: ['key', 'char', 'EN-lttr', 'RU-lttr'],
  }],
  ['KeyT', {
    ENValue: 'T', RUValue: 'Е', addENValue: '', addRUValue: '', classNames: ['key', 'char', 'EN-lttr', 'RU-lttr'],
  }],
  ['KeyY', {
    ENValue: 'Y', RUValue: 'Н', addENValue: '', addRUValue: '', classNames: ['key', 'char', 'EN-lttr', 'RU-lttr'],
  }],
  ['KeyU', {
    ENValue: 'U', RUValue: 'Г', addENValue: '', addRUValue: '', classNames: ['key', 'char', 'EN-lttr', 'RU-lttr'],
  }],
  ['KeyI', {
    ENValue: 'I', RUValue: 'Ш', addENValue: '', addRUValue: '', classNames: ['key', 'char', 'EN-lttr', 'RU-lttr'],
  }],
  ['KeyO', {
    ENValue: 'O', RUValue: 'Щ', addENValue: '', addRUValue: '', classNames: ['key', 'char', 'EN-lttr', 'RU-lttr'],
  }],
  ['KeyP', {
    ENValue: 'P', RUValue: 'З', addENValue: '', addRUValue: '', classNames: ['key', 'char', 'EN-lttr', 'RU-lttr'],
  }],
  ['BracketLeft', {
    ENValue: '[', RUValue: 'Х', addENValue: '{', addRUValue: '', classNames: ['key', 'char', 'RU-lttr'],
  }],
  ['BracketRight', {
    ENValue: ']', RUValue: 'Ъ', addENValue: '}', addRUValue: '', classNames: ['key', 'char', 'RU-lttr'],
  }],
  ['Backslash', {
    ENValue: '\u002F', RUValue: 'Ё', addENValue: '|', addRUValue: '', classNames: ['key', 'char', 'RU-lttr'],
  }],
  ['CapsLock', {
    ENValue: '', RUValue: '', addENValue: '', addRUValue: '', classNames: ['key', 'mod'],
  }],
  ['KeyA', {
    ENValue: 'A', RUValue: 'Ф', addENValue: '', addRUValue: '', classNames: ['key', 'char', 'EN-lttr', 'RU-lttr'],
  }],
  ['KeyS', {
    ENValue: 'S', RUValue: 'Ы', addENValue: '', addRUValue: '', classNames: ['key', 'char', 'EN-lttr', 'RU-lttr'],
  }],
  ['KeyD', {
    ENValue: 'D', RUValue: 'В', addENValue: '', addRUValue: '', classNames: ['key', 'char', 'EN-lttr', 'RU-lttr'],
  }],
  ['KeyF', {
    ENValue: 'F', RUValue: 'А', addENValue: '', addRUValue: '', classNames: ['key', 'char', 'EN-lttr', 'RU-lttr'],
  }],
  ['KeyG', {
    ENValue: 'G', RUValue: 'П', addENValue: '', addRUValue: '', classNames: ['key', 'char', 'EN-lttr', 'RU-lttr'],
  }],
  ['KeyH', {
    ENValue: 'H', RUValue: 'Р', addENValue: '', addRUValue: '', classNames: ['key', 'char', 'EN-lttr', 'RU-lttr'],
  }],
  ['KeyJ', {
    ENValue: 'J', RUValue: 'О', addENValue: '', addRUValue: '', classNames: ['key', 'char', 'EN-lttr', 'RU-lttr'],
  }],
  ['KeyK', {
    ENValue: 'K', RUValue: 'Л', addENValue: '', addRUValue: '', classNames: ['key', 'char', 'EN-lttr', 'RU-lttr'],
  }],
  ['KeyL', {
    ENValue: 'L', RUValue: 'Д', addENValue: '', addRUValue: '', classNames: ['key', 'char', 'EN-lttr', 'RU-lttr'],
  }],
  ['Semicolon', {
    ENValue: ';', RUValue: 'Ж', addENValue: ':', addRUValue: '', classNames: ['key', 'char', 'RU-lttr'],
  }],
  ['Quote', {
    ENValue: '\'', RUValue: 'Э', addENValue: '"', addRUValue: '', classNames: ['key', 'char', 'RU-lttr'],
  }],
  ['Enter', {
    ENValue: '', RUValue: '', addENValue: '', addRUValue: '', classNames: ['key', 'mod'],
  }],
  ['ShiftLeft', {
    ENValue: '', RUValue: '', addENValue: '', addRUValue: '', classNames: ['key', 'mod'],
  }],
  ['IntlBackslash', {
    ENValue: '`', RUValue: ']', addENValue: '~', addRUValue: '[', classNames: ['key', 'char'],
  }],
  ['KeyZ', {
    ENValue: 'Z', RUValue: 'Я', addENValue: '', addRUValue: '', classNames: ['key', 'char', 'EN-lttr', 'RU-lttr'],
  }],
  ['KeyX', {
    ENValue: 'X', RUValue: 'Ч', addENValue: '', addRUValue: '', classNames: ['key', 'char', 'EN-lttr', 'RU-lttr'],
  }],
  ['KeyC', {
    ENValue: 'C', RUValue: 'С', addENValue: '', addRUValue: '', classNames: ['key', 'char', 'EN-lttr', 'RU-lttr'],
  }],
  ['KeyV', {
    ENValue: 'V', RUValue: 'М', addENValue: '', addRUValue: '', classNames: ['key', 'char', 'EN-lttr', 'RU-lttr'],
  }],
  ['KeyB', {
    ENValue: 'B', RUValue: 'И', addENValue: '', addRUValue: '', classNames: ['key', 'char', 'EN-lttr', 'RU-lttr'],
  }],
  ['KeyN', {
    ENValue: 'N', RUValue: 'Т', addENValue: '', addRUValue: '', classNames: ['key', 'char', 'EN-lttr', 'RU-lttr'],
  }],
  ['KeyM', {
    ENValue: 'M', RUValue: 'Ь', addENValue: '', addRUValue: '', classNames: ['key', 'char', 'EN-lttr', 'RU-lttr'],
  }],
  ['Comma', {
    ENValue: ',', RUValue: 'Б', addENValue: '<', addRUValue: '', classNames: ['key', 'char', 'EN-lttr', 'RU-lttr'],
  }],
  ['Period', {
    ENValue: '.', RUValue: 'Ю', addENValue: '>', addRUValue: '', classNames: ['key', 'char', 'RU-lttr'],
  }],
  ['Slash', {
    ENValue: '/', RUValue: '/', addENValue: '?', addRUValue: '?', classNames: ['key', 'char'],
  }],
  ['ShiftRight', {
    ENValue: '', RUValue: '', addENValue: '', addRUValue: '', classNames: ['key', 'mod'],
  }],
  ['Fn', {
    ENValue: '', RUValue: '', addENValue: '', addRUValue: '', classNames: ['key', 'mod'],
  }],
  ['ControlLeft', {
    ENValue: 'control', RUValue: '', addENValue: '', addRUValue: '', classNames: ['key', 'mod'],
  }],
  ['AltLeft', {
    ENValue: 'option', RUValue: '', addENValue: '', addRUValue: '', classNames: ['key', 'mod'],
  }],
  ['MetaLeft', {
    ENValue: 'command', RUValue: '', addENValue: '', addRUValue: '', classNames: ['key', 'mod'],
  }],
  ['Space', {
    ENValue: ' ', RUValue: ' ', addENValue: '', addRUValue: '', classNames: ['key', 'char', 'mod'],
  }],
  ['MetaRight', {
    ENValue: 'command', RUValue: '', addENValue: '', addRUValue: '', classNames: ['key', 'mod'],
  }],
  ['AltRight', {
    ENValue: 'option', RUValue: '', addENValue: '', addRUValue: '', classNames: ['key', 'mod'],
  }],
  ['ArrowLeft', {
    ENValue: '', RUValue: '', addENValue: '', addRUValue: '', classNames: ['key', 'mod'],
  }],
  ['ArrowContainer', {
    ENValue: '', RUValue: '', addENValue: '', addRUValue: '', classNames: ['container'],
  }],
  ['ArrowRight', {
    ENValue: '', RUValue: '', addENValue: '', addRUValue: '', classNames: ['key', 'mod'],
  }],
]);

const arrowContainer = new Map([
  ['ArrowUp', {
    ENValue: '', RUValue: '', addENValue: '', addRUValue: '', classNames: ['key', 'mod'],
  }],
  ['ArrowDown', {
    ENValue: '', RUValue: '', addENValue: '', addRUValue: '', classNames: ['key', 'mod'],
  }],
]);

// несколько дополнительных функций:
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

// функция для смены языка:
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
  // document.querySelector('.active').classList.remove('active');
}

// класс, который строит страницу:
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

// создаем обертку:
const keyboard = new HTMLBuilder('div', 'keyboard');

// наполняем ее всяким:
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

keyboard.setParent('fragment')
  .createElement('div', 'add-info')
  .cleanContainer()
  .createElement('p', 'add-text', null, 2)
  .becomeChildOf('.keyboard');

// некоторая доп информация:
const addTextLast = document.querySelector('.add-text:last-child');
addTextLast.innerHTML = 'keyboard is created for mac os';

// set default lang:
if (localStorage.getItem('ENLang?') === null) {
  switchTo('EN', keysInfo);
// после перезагрузки страницы проверяем localStorage:
} else if (localStorage.getItem('ENLang?') === 'true') {
  switchTo('EN', keysInfo);
} else {
  switchTo('RU', keysInfo);
}

// Собираем элементы для обработчиков событий:

const out = document.querySelector('.screen-text');

let ENlang = true;

out.textContent = ' ';

let cpslck = false;
let shiftL = false;
let shiftR = false;
let ctrl = false;

function highlight(event) {
  event.target.classList.toggle('active');
}

// в мапе храним функции обработчики для клавиш-модификаторов:
const handlersEvent = new Map([
  ['Backspace', function Backspace() {
    if (!out.lastChild.previousElementSibling && out.lastChild.data === ' ') {
      return;
    }
    if (out.lastChild.data === ' ') {
      out.removeChild(out.lastChild);
      out.removeChild(out.lastElementChild);
    }
    const str = out.lastChild.data;
    out.lastChild.data = str.slice(0, str.length - 1);
  }],

  ['Tab', function Tab() {
    out.textContent += '    ';
  }],

  ['CapsLock', function CapsLock(event) {
    cpslck = !cpslck;
    highlight(event);
  }],

  ['Enter', function Enter() {
    out.innerHTML += '<br> ';
  }],

  ['ShiftLeft', function ShiftLeft(event) {
    shiftL = !shiftL;
    highlight(event);
  }],

  ['ShiftRight', function ShiftRight(event) {
    shiftR = !shiftR;
    highlight(event);
  }],

  ['ControlLeft', function ControlLeft(event) {
    ctrl = !ctrl;
    highlight(event);
  }],

  ['Space', function Space() {
    if (ctrl) {
      if (ENlang) {
        switchTo('RU', keysInfo);
        ENlang = false;
      } else {
        switchTo('EN', keysInfo);
        ENlang = true;
      }
      localStorage.setItem('ENLang?', ENlang);
      document.getElementById('ControlLeft').classList.remove('active');
      ctrl = false;
    }
  }],
]);

function printOnClick(event) {
  let key;
  if (shiftL || shiftR) {
    key = event.target.textContent;
  } else {
    key = event.currentTarget.firstChild.data.toLowerCase();
  }
  if (cpslck) {
    key = event.currentTarget.firstChild.data;
  }
  out.lastChild.data += key;
}

// тут будем хранить одновременно нажатые клавиши:
const pressedKeys = {};

function printOnKeyPress(event) {
  const { key } = event;
  const { code } = event;
  const pressedEl = document.getElementById(code);
  pressedEl.classList.add('active');
  if (code === 'ControlLeft') {
    event.preventDefault();
  }
  pressedKeys[code] = true;
  if (key === 'Enter') {
    handlersEvent.get(key)();
  }
  if (pressedEl.classList.contains('char')) {
    out.lastChild.data += key;
  }
  if (code === 'Backspace') {
    handlersEvent.get(code)();
  }
}

// это не работает:
function hotKeys(event) {
  const pressedEl = document.getElementById(event.code);
  pressedEl.classList.remove('active');
  // событие на пробеле не срабатывает, поэтому в этом нет смысла:
  if (['ControlLeft'] in pressedKeys && ['Space'] in pressedKeys) {
    if (ENlang) {
      switchTo('RU', keysInfo);
      ENlang = false;
    } else {
      switchTo('EN', keysInfo);
      ENlang = true;
    }
    // ни в чем нет смысла
    localStorage.setItem('ENLang?', ENlang);
  }
  delete pressedKeys[event.code];
}

document.addEventListener('keydown', printOnKeyPress);
document.addEventListener('keyup', hotKeys);

const keys = Array.from(document.querySelectorAll('.key'));
const chars = Array.from(document.querySelectorAll('.char'));
const mods = Array.from(document.querySelectorAll('.mod'));

keys.forEach((key) => {
  key.addEventListener('mousedown', highlight);
  key.addEventListener('mouseup', highlight);
});

chars.forEach((char) => {
  char.addEventListener('click', printOnClick);
});

mods.forEach((mod) => {
  mod.addEventListener('click', handlersEvent.get(mod.id));
});
