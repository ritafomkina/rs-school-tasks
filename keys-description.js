// Map с данными о каждой клавише:

const keysInfo = new Map([
  ['§', {
    enValue: '§', ruValue: '>', addEnValue: '±', addRuValue: '<', classNames: ['char'],
  }],
  ['1', {
    enValue: '1', ruValue: '1', addEnValue: '!', addRuValue: '!', classNames: ['char', 'num'],
  }],
  ['2', {
    enValue: '2', ruValue: '2', addEnValue: '@', addRuValue: '"', classNames: ['char', 'num'],
  }],
  ['3', {
    enValue: '3', ruValue: '3', addEnValue: '#', addRuValue: '№', classNames: ['char', 'num'],
  }],
  ['4', {
    enValue: '4', ruValue: '4', addEnValue: '$', addRuValue: '%', classNames: ['char', 'num'],
  }],
  ['5', {
    enValue: '5', ruValue: '5', addEnValue: '%', addRuValue: ':', classNames: ['char', 'num'],
  }],
  ['6', {
    enValue: '6', ruValue: '6', addEnValue: '^', addRuValue: ',', classNames: ['char', 'num'],
  }],
  ['7', {
    enValue: '7', ruValue: '7', addEnValue: '&', addRuValue: '.', classNames: ['char', 'num'],
  }],
  ['8', {
    enValue: '8', ruValue: '8', addEnValue: '*', addRuValue: ';', classNames: ['char', 'num'],
  }],
  ['9', {
    enValue: '9', ruValue: '9', addEnValue: '(', addRuValue: '(', classNames: ['char', 'num'],
  }],
  ['0', {
    enValue: '0', ruValue: '0', addEnValue: ')', addRuValue: ')', classNames: ['char', 'num'],
  }],
  ['-', {
    enValue: '-', ruValue: '-', addEnValue: '_', addRuValue: '_', classNames: ['char', 'num'],
  }],
  ['=', {
    enValue: '=', ruValue: '=', addEnValue: '+', addRuValue: '+', classNames: ['char', 'num'],
  }],
  ['bckspc', {
    enValue: '', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
  ['tab', {
    enValue: '  ', ruValue: '  ', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
  ['q', {
    enValue: 'Q', ruValue: 'й', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['w', {
    enValue: 'W', ruValue: 'ц', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['e', {
    enValue: 'E', ruValue: 'у', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['r', {
    enValue: 'R', ruValue: 'к', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['t', {
    enValue: 'T', ruValue: 'е', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['y', {
    enValue: 'Y', ruValue: 'н', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['u', {
    enValue: 'U', ruValue: 'г', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['i', {
    enValue: 'I', ruValue: 'ш', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['o', {
    enValue: 'O', ruValue: 'щ', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['p', {
    enValue: 'P', ruValue: 'з', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['[', {
    enValue: '[', ruValue: 'х', addEnValue: '{', addRuValue: '', classNames: ['char', 'ru-lttr'],
  }],
  [']', {
    enValue: ']', ruValue: 'ъ', addEnValue: '}', addRuValue: '', classNames: ['char', 'ru-lttr'],
  }],
  ['slash-rev', {
    enValue: '\u002F', ruValue: 'ё', addEnValue: '|', addRuValue: '', classNames: ['char', 'ru-lttr'],
  }],
  ['cpslck', {
    enValue: '', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
  ['a', {
    enValue: 'A', ruValue: 'ф', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['s', {
    enValue: 'S', ruValue: 'ы', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['d', {
    enValue: 'D', ruValue: 'в', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['f', {
    enValue: 'F', ruValue: 'а', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['g', {
    enValue: 'G', ruValue: 'п', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['h', {
    enValue: 'H', ruValue: 'р', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['j', {
    enValue: 'J', ruValue: 'о', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['k', {
    enValue: 'K', ruValue: 'л', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['l', {
    enValue: 'L', ruValue: 'д', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  [';', {
    enValue: ';', ruValue: 'ж', addEnValue: ':', addRuValue: '', classNames: ['char', 'ru-lttr'],
  }],
  ['\'', {
    enValue: '\'', ruValue: 'э', addEnValue: '"', addRuValue: '', classNames: ['char', 'ru-lttr'],
  }],
  ['Enter', {
    enValue: '', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
  ['shift-l', {
    enValue: '', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
  ['`', {
    enValue: '`', ruValue: ']', addEnValue: '~', addRuValue: '[', classNames: ['char'],
  }],
  ['z', {
    enValue: 'Z', ruValue: 'я', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['x', {
    enValue: 'X', ruValue: 'ч', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['c', {
    enValue: 'C', ruValue: 'с', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['v', {
    enValue: 'V', ruValue: 'м', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['b', {
    enValue: 'B', ruValue: 'и', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['n', {
    enValue: 'N', ruValue: 'т', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['m', {
    enValue: 'M', ruValue: 'ь', addEnValue: '', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  [',', {
    enValue: ',', ruValue: 'б', addEnValue: '<', addRuValue: '', classNames: ['char', 'en-lttr', 'ru-lttr'],
  }],
  ['.', {
    enValue: '.', ruValue: 'ю', addEnValue: '>', addRuValue: '', classNames: ['char', 'ru-lttr'],
  }],
  ['slash', {
    enValue: '/', ruValue: '/', addEnValue: '?', addRuValue: '?', classNames: ['сhar'],
  }],
  ['shift-r', {
    enValue: '', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
  ['fn', {
    enValue: '', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
  ['ctrl', {
    enValue: 'control', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
  ['opt-l', {
    enValue: 'option', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
  ['cmd-l', {
    enValue: 'command', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
  ['whtspc', {
    enValue: ' ', ruValue: ' ', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
  ['cmd-r', {
    enValue: 'command', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
  ['opt-r', {
    enValue: 'option', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
  ['arrw-l', {
    enValue: '', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
  ['arrws-container', {
    enValue: '', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
  ['arrw-r', {
    enValue: '', ruValue: '', addEnValue: '', addRuValue: '', classNames: ['mod'],
  }],
]);