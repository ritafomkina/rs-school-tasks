const { sPush, sSlice} = require('./service-methods');

function chunk(arr, length = 1) {
    const result = [];
    if (arguments.length === 0 || length <= 0) {
        return result;
    }
    if (!Array.isArray(arr)) {
        throw new TypeError('First argument should be an array');
    }
    if (typeof length !== 'number') {
        throw new TypeError('Second argument should be a number');
    }
    for (let i = 0; i < arr.length; i += length) {
        sPush(result, sSlice(arr, i, i + length));
    }
    return result;
}

module.exports = { chunk }