function sPush (arr, element) {
    const lastInd = arr.length;
    arr[lastInd] = element;
    return arr;
}

function sSlice (arr, start, end) {

    const result = [];
    const length = arr.length;

    if (end === 0) {
        return result;
    }
    if (!start || start <= -length) {
        start = 0;
    }
    if (!end || end > length) {
        end = length;
    }

    if (start < 0 && start >= -length) {
        start = length + start;
    }
    if (end < 0 && end >= -length) {
        end = length + end;
    }
    if (end < start) {
        return result;
    }
    for (let i = start; i < end; i += 1) {
        sPush(result, arr[i]);
      }
  return result;
}

function sFind(arr, callback) {
    let result;
    for (let i = 0; i <= arr.length; i += 1) {
        if (callback(arr[i])) {
            result = arr[i];
            break;
        }
    }
    return result;
}

function sFilter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (callback(arr[i])) {
            result[result.length] = arr[i];
        }
    }
    return result;
}

function sForEach(arr, callback) {
    for (let i = 0; i < arr.length; i += 1) {
        callback(arr[i], i, arr);
    }
}

module.exports = { sPush, sSlice, sFind, sFilter, sForEach }