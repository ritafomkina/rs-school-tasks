const { sPush, sFilter } = require('./service-methods');

function filter(arr, predicate) {
    if (!Array.isArray(arr)) {
        throw new TypeError('First argument should be an array');
    }
    if (!predicate) {
        return [];
    }
    let result;
    if (typeof predicate === 'function') {
        result = sFilter(arr, predicate);
    }
    if (Array.isArray(predicate)) {
        result = [];
        const key = predicate[0];
        const value = predicate[1];
        for (let i = 0; i < arr.length; i += 1) {
            if(arr[i][key] === value) {
                sPush(result, arr[i]);
            }
        }
    }
    if (typeof predicate === 'object' && !Array.isArray(predicate)) {
        const obj = predicate;
        result = [];
        for (let i = 0; i < arr.length; i += 1) {
            for (let key in obj) {
                if (obj[key] === arr[i][key]) {
                    sPush(result, arr[i]);
                }
            }
        }
    }
    if (typeof predicate === 'string') {
        const prop = predicate;
        result = [];
        for (let i = 0; i < arr.length; i += 1) {
            if (arr[i][prop]) {
                sPush(result, arr[i]);
            }
        }
    }
    return result;
}

module.exports = { filter }