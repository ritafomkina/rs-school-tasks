const out = document.querySelector('.screen-text');
const keys = Array.from(document.querySelectorAll('.key'));
const chars = Array.from(document.querySelectorAll('.char'));

let ENlang = true;

out.innerHTML = '';

let cpslck = false;
let shiftL = false;
let shiftR = false;
let ctrl = false;

function CapsLock(event) {
  cpslck = !cpslck;
  makeActive(event);
}

function ShiftLeft(event) {
  shiftL = !shiftL;
  makeActive(event);
}

function ShiftRight(event) {
  shiftR = !shiftR;
  makeActive(event);
}

function Backspace(event) {
  const str = out.innerHTML;
  str.slice(0, str.length - 1);
}

function Enter(event) {
  const br = document.createElement('br');
  out.append(br);
}

function Tab(event) {
  out.innerHTML += '    ';
}

function ControlLeft(event) {
  ctrl = !ctrl;
  makeActive(event);
}

function Space(event) {
  if (ctrl) {
    if (ENlang) {
      switchTo('RU');
      ENlang = false;
    } else {
      switchTo('RU');
      ENlang = true;
    }
  } else {
    out.innerHTML += ' ';
  }
}

function printClick(event) {
  let key = event.currentTarget.textContent;
  key = cpslck ? key.toUpperCase() : key.toLowerCase();
  out.innerHTML += key;
  ctrl = false;
}

const pressedKeys = {};

function makeActive(event) {
  event.target.classList.toggle('active');
}
function printKey(event) {
  const { key } = event;
  const { code } = event;
  const pressedEl = document.getElementById(code);
  pressedEl.classList.add('active');
  pressedKeys[code] = true;
  if (key === 'Enter') {
    enter(out);
  }
  if (pressedEl.classList.contains('char')) {
    out.innerHTML += key;
  }
  if (event.code === 'Backspace') {
    out.innerHTML = backspace(out.innerHTML);
  }
}

function hotKeys(event) {
  // console.log(pressedKeys);
  const pressedEl = document.getElementById(event.code);
  pressedEl.classList.remove('active');
  if (['ControlLeft'] in pressedKeys && ['Space'] in pressedKeys) {
    if (ENlang) {
      switchTo('RU', keysInfo);
      ENlang = false;
    } else {
      switchTo('EN', keysInfo);
      ENlang = true;
    }
  }
  delete pressedKeys[event.code];
}

const addChars = Array.from(document.querySelectorAll('.char:has(> span)')).map((el) => el.firstElementChild);

keys.forEach((key) => {
  key.addEventListener('mousedown', makeActive);
  key.addEventListener('mouseup', makeActive);
});

document.addEventListener('keydown', printKey);
document.addEventListener('keyup', hotKeys);

if (shiftL || shiftR) {
  addChars.forEach((el) => el.addEventListener('click', printClick));
} else {
  chars.forEach((char) => {
    char.addEventListener('click', printClick);
  });
}
