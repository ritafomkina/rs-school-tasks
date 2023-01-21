// Map с данными о каждой клавише:

const keysInfo = new Map([
  ['Backquote', {
    enValue: '§', ruValue: '>', addEnValue: '±', addRuValue: '<', classNames: ['char'],
  }],
  ['Digit1', {
    enValue: '1', ruValue: '1', addEnValue: '!', addRuValue: '!', classNames: ['char', 'num'],
  }],
  ['Digit2', {
    enValue: '2', ruValue: '2', addEnValue: '@', addRuValue: '"', classNames: ['char', 'num'],
  }],
  ['Digit3', {
    enValue: '3', ruValue: '3', addEnValue: '#', addRuValue: '№', classNames: ['char', 'num'],
  }],
  ['Digit4', {
    enValue: '4', ruValue: '4', addEnValue: '$', addRuValue: '%', classNames: ['char', 'num'],
  }],
  ['Digit5', {
    enValue: '5', ruValue: '5', addEnValue: '%', addRuValue: ':', classNames: ['char', 'num'],
  }],
  ['Digit6', {
    enValue: '6', ruValue: '6', addEnValue: '^', addRuValue: ',', classNames: ['char', 'num'],
  }],
  ['Digit7', {
    enValue: '7', ruValue: '7', addEnValue: '&', addRuValue: '.', classNames: ['char', 'num'],
  }],
  ['Digit8', {
    enValue: '8', ruValue: '8', addEnValue: '*', addRuValue: ';', classNames: ['char', 'num'],
  }],
  ['Digit9', {
    enValue: '9', ruValue: '9', addEnValue: '(', addRuValue: '(', classNames: ['char', 'num'],
  }],
  ['Digit0', {
    enValue: '0', ruValue: '0', addEnValue: ')', addRuValue: ')', classNames: ['char', 'num'],
  }],
  ['Minus', {
    enValue: '-', ruValue: '-', addEnValue: '_', addRuValue: '_', classNames: ['char', 'num'],
  }],
  ['Equal', {
    enValue: '=', ruValue: '=', addEnValue: '+', addRuValue: '+', classNames: ['char', 'num'],
  }],
  ['Backspace', {
    enValue: '', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
  ['Tab', {
    enValue: '  ', ruValue: '  ', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
  ['KeyQ', {
    enValue: 'Q', ruValue: 'й', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['KeyW', {
    enValue: 'W', ruValue: 'ц', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['KeyE', {
    enValue: 'E', ruValue: 'у', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['KeyR', {
    enValue: 'R', ruValue: 'к', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['KeyT', {
    enValue: 'T', ruValue: 'е', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['KeyY', {
    enValue: 'Y', ruValue: 'н', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['KeyU', {
    enValue: 'U', ruValue: 'г', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['KeyI', {
    enValue: 'I', ruValue: 'ш', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['KeyO', {
    enValue: 'O', ruValue: 'щ', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['KeyP', {
    enValue: 'P', ruValue: 'з', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['BracketLeft', {
    enValue: '[', ruValue: 'х', addEnValue: '{', addRuValue: '', classNames: ['char', 'ru-lttr'],
  }],
  ['BracketRight', {
    enValue: ']', ruValue: 'ъ', addEnValue: '}', addRuValue: '', classNames: ['char', 'ru-lttr'],
  }],
  ['Backslash', {
    enValue: '\u002F', ruValue: 'ё', addEnValue: '|', addRuValue: '', classNames: ['char', 'ru-lttr'],
  }],
  ['CapsLock', {
    enValue: '', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
  ['KeyA', {
    enValue: 'A', ruValue: 'ф', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['KeyS', {
    enValue: 'S', ruValue: 'ы', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['KeyD', {
    enValue: 'D', ruValue: 'в', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['KeyF', {
    enValue: 'F', ruValue: 'а', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['KeyG', {
    enValue: 'G', ruValue: 'п', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['KeyH', {
    enValue: 'H', ruValue: 'р', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['KeyJ', {
    enValue: 'J', ruValue: 'о', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['KeyK', {
    enValue: 'K', ruValue: 'л', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['KeyL', {
    enValue: 'L', ruValue: 'д', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['Semicolon', {
    enValue: ';', ruValue: 'ж', addEnValue: ':', addRuValue: '', classNames: ['char', 'ru-lttr'],
  }],
  ['Quote', {
    enValue: '\'', ruValue: 'э', addEnValue: '"', addRuValue: '', classNames: ['char', 'ru-lttr'],
  }],
  ['Enter', {
    enValue: '', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
  ['ShiftLeft', {
    enValue: '', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
  ['IntlBackslash', {
    enValue: '`', ruValue: ']', addEnValue: '~', addRuValue: '[', classNames: ['char'],
  }],
  ['KeyZ', {
    enValue: 'Z', ruValue: 'я', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['KeyX', {
    enValue: 'X', ruValue: 'ч', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['KeyC', {
    enValue: 'C', ruValue: 'с', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['KeyV', {
    enValue: 'V', ruValue: 'м', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['KeyB', {
    enValue: 'B', ruValue: 'и', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['KeyN', {
    enValue: 'N', ruValue: 'т', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['KeyM', {
    enValue: 'M', ruValue: 'ь', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['Comma', {
    enValue: ',', ruValue: 'б', addEnValue: '<', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['Period', {
    enValue: '.', ruValue: 'ю', addEnValue: '>', addRuValue: '', classNames: ['char', 'ru-lttr'],
  }],
  ['Slash', {
    enValue: '', ruValue: '/', addEnValue: '?', addRuValue: '?', classNames: ['сhar'],
  }],
  ['ShiftRight', {
    enValue: '', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
  ['Fn', {
    enValue: '', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
  ['ControlLeft', {
    enValue: 'control', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
  ['AltLeft', {
    enValue: 'option', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
  ['MetaLeft', {
    enValue: 'command', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
  ['Space', {
    enValue: ' ', ruValue: ' ', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
  ['MetaRight', {
    enValue: 'command', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
  ['AltRight', {
    enValue: 'option', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
  ['ArrowLeft', {
    enValue: '', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
  ['ArrowContainer', {
    enValue: '', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['container'],
  }],
  ['ArrowRight', {
    enValue: '', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
]);

const arrowContainer = new Map ([
  ['AltRight', {
    enValue: 'option', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
  ['ArrowLeft', {
    enValue: '', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
]);
