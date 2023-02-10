const { sFilter } = require('./service-methods');

function compact(arr) {
    if (arguments.length === 0 || arr.length <= 0) {
        return [];
    }
    if (!Array.isArray(arr)) {
        throw new TypeError('First argument should be an array');
    }
   return sFilter(arr, item => !!item === true);
}

module.exports = { compact }