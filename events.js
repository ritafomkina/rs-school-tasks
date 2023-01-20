let screenText = '';
const out = document.querySelector('.screen-text');
out.textContent = screenText;

function backspace(str) {
  return str.slice(0, str.length - 1);
}

function enter(str) {
  const br = document.createElement('br');
  return (str + br);
}

function printClick(event) {
  if (!event.target.classList.contains('key')) return;
  const key = event.target.textContent;
  screenText += key;
  out.textContent = screenText;
}

function printKey(event) {
  if (!event.target.classList.contains('key')) return;
// console.log(event);
  let { key } = event;
  const { code } = event;
  if (key === 'Enter') {
    key = keysInfo.get(key).enValue;
    screenText += key;
  }
  if (code.includes('Digit') || code.includes('Key') || code.includes('Space')) {
    screenText += key;
  }
  if (event.code === 'Backspace') {
    screenText = backspace(screenText);
  }
  console.log(key);
  out.textContent = screenText;
  console.log(screenText);
//   console.log(event.key);
}

const keyArea = document.querySelector('.keys-area');
// keyArea.addEventListener('click', print);
keyArea.addEventListener('keydown', printKey);
