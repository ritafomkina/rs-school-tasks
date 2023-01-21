const out = document.querySelector('.screen-text');
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
  if (!event.target.classList.contains('key')) return;
  let key = event.target.textContent;
  let active = document.querySelector('.active');
  if(active) {
    active.classList.remove('active');
  }
  event.target.classList.add('active');
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

function printKey(event) {
  const key = event.key.toLowerCase();
  const { code } = event;
  let active = document.querySelector('.active');
  if(active) {
    active.classList.remove('active');
  }
  active = document.getElementById(code);
  active.classList.add('active');
  if (key === 'enter') {
    enter(out);
  }
  if (code.includes('Digit') || code.includes('Key') || code.includes('Space')) {
    out.innerHTML += key;
  }
  if (event.code === 'Backspace') {
    out.innerHTML = backspace(out.innerHTML);
  }
}

const keyArea = document.querySelector('.keys-area');
keyArea.addEventListener('click', printClick);
document.addEventListener('keydown', printKey);
