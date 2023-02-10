const { sSlice } = require('./service-methods');

function take (arr, num = 1) {
  if (arguments.length === 0 || num < 0) {
    return [];
  }
  if (!Array.isArray(arr)) {
    throw new TypeError('First argument should be an array');
  }
  if (typeof num !== 'number') {
    throw new TypeError('Second argument should be a number');
  }
    let result;
    result = sSlice(arr, 0, num);
    return result;
}

module.exports = { take }