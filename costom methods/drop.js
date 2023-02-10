const { sSlice } = require('./service-methods');

function drop(arr, num = 1) {
  const result = [];
  if (arguments.length === 0 || num < 0) {
    return result;
  }
  if (!Array.isArray(arr)) {
    throw new TypeError('First argument should be an array');
  }
  if (typeof num !== 'number') {
    throw new TypeError('Second argument should be a number');
  }
 return sSlice(arr, num, arr.length);
}

module.exports = { drop }