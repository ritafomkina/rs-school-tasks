const { drop } = require('./drop');

function dropWhile(arr, predicate) {
    if (!Array.isArray(arr)) {
        throw new TypeError('First argument should be an array');
    }
    if (!predicate) {
        return [];
    }
    let result;
    if (typeof predicate === 'function') {
        const callback = predicate;
        for (let i = 0; i < arr.length; i += 1) {
            if (!callback(arr[i])) {
                result = drop(arr, i);
                break;
            }
        }
    }
    if (Array.isArray(predicate)) {
        const key = predicate[0];
        const value = predicate[1];
        for (let i = 0; i < arr.length; i += 1) {
            if(arr[i][key] !== value) {
                result = drop(arr, i);
                    break;
            }
        }
    }
    if (typeof predicate === 'object' && !Array.isArray(predicate)) {
        const obj = predicate;
        for (let i = 0; i < arr.length; i += 1) {
            for (let key in obj) {
                if (obj[key] === arr[i][key]) {
                    result = drop(arr, i);
                    break;
                }
            }
        }
    }
    if (typeof predicate === 'string') {
        const prop = predicate;
        for (let i = 0; i < arr.length; i += 1) {
            if (prop in arr[i]) {
                result = drop(arr, i);
                    break;
            }
        }
    }
    return result;
}

module.exports = { dropWhile }