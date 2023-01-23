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

// function loadData() {
//   return new Promise() {

//   }
// }