const out = document.querySelector('.screen-text');
const keys = Array.from(document.querySelectorAll('.key'));

let ENlang = true;

out.innerHTML = '';

const cpslck = false;
const shiftL = false;
const shiftR = false;

function backspace(str) {
  return str.slice(0, str.length - 1);
}

function enter(parent) {
  const br = document.createElement('br');
  parent.append(br);
}

function tab(str) {
  return '	';
}

function printClick(event) {
  let key = event.currentTarget.textContent[0].toLowerCase();




  if(event.target.id === 'Backspace') {
    out.innerHTML = backspace(out.innerHTML);
  }
  if(event.target.id === 'Enter') {
   enter(out);
  }
  if(event.target.id === 'Tab') {
    out.innerHTML += tab();
  }
  // screenText += key;
  out.innerHTML += key;
  // if (event.target.id('bckspc')))
}

const pressedKeys = {};

function makeActive(event) {
  event.target.classList.toggle('active');
}

function printKey(event) {
  // console.log(event.code)
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

keys.forEach((key) => {
  key.addEventListener('mousedown', makeActive);
  key.addEventListener('mouseup', makeActive);
  key.addEventListener('click', printClick);
});

document.addEventListener('keydown', printKey);
document.addEventListener('keyup', hotKeys);
