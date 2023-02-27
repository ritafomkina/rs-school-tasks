const {
  sPush,
  sSlice,
  sFilter,
  sFind,
  sForEach,
} = require('./service-methods');

class Lodash {
  chunk(arr, length = 1) {
    const result = [];
    if (arguments.length === 0 || arr.length === 0 || length === 0) {
      return result;
    }
    if (!(arr instanceof Array)) {
      throw new TypeError('First argument should be an array');
    }
    if (
      typeof length !== 'number' ||
      isNaN(length) ||
      (length < 0) | (Math.floor(length) !== length)
    ) {
      throw new TypeError(
        'Second argument should be an positive integer or zero'
      );
    }
    for (let i = 0; i < arr.length; i += length) {
      sPush(result, sSlice(arr, i, i + length));
    }
    return result;
  }

  compact(arr) {
    if (arguments.length === 0 || arr.length === 0) {
      return [];
    }
    if (!(arr instanceof Array)) {
      throw new TypeError('First argument should be an array');
    }
    return sFilter(arr, (item) => !!item === true);
  }

  drop(arr, num = 1) {
    const result = [];
    if (arguments.length === 0 || arr.length === 0 || num > arr.length) {
      return result;
    }
    if (!(arr instanceof Array)) {
      throw new TypeError('First argument should be an array');
    }
    if (
      typeof num !== 'number' ||
      isNaN(num) ||
      num < 0 ||
      Math.floor(num) !== num
    ) {
      throw new TypeError(
        'Second argument should be an positive integer or zero'
      );
    }
    return sSlice(arr, num, arr.length);
  }

  dropWhile(arr, predicate) {
    if (arguments.length === 0 || arr.length === 0 || !predicate) {
      return [];
    }
    if (!(arr instanceof Array)) {
      throw new TypeError('First argument should be an array');
    }
    let result;
    let callback;
    if (typeof predicate === 'object' && !(predicate instanceof Array)) {
      const obj = predicate;
      for (let i = 0; i < arr.length; i += 1) {
        for (let key in obj) {
          callback = (item) => obj[key] === item[key];
          if (callback(arr[i])) {
            result = this.drop(arr, i);
            break;
          }
        }
      }
      return result;
    }
    if (typeof predicate === 'function') {
      callback = predicate;
    }
    if (predicate instanceof Array) {
      const key = predicate[0];
      const value = predicate[1];
      callback = (item) => item[key] === value;
    }
    if (typeof predicate === 'string') {
      const prop = predicate;
      callback = (item) => item[prop];
    }
    for (let i = 0; i < arr.length; i += 1) {
      if (!callback(arr[i])) {
        result = this.drop(arr, i);
        break;
      }
    }
    return result;
  }

  take(arr, num = 1) {
    if (arguments.length === 0 || arr.length === 0) {
      return [];
    }
    if (!(arr instanceof Array)) {
      throw new TypeError('First argument should be an array');
    }
    if (
      typeof num !== 'number' ||
      isNaN(num) ||
      num <= 0 ||
      Math.floor(num) !== num
    ) {
      throw new TypeError(
        'Second argument should be an positive integer or zero'
      );
    }
    let result;
    result = sSlice(arr, 0, num);
    return result;
  }

  filter(arr, predicate) {
    if (arguments.length === 0 || arr.length === 0) {
      return [];
    }
    if (!(arr instanceof Array)) {
      throw new TypeError('First argument should be an array');
    }
    if (typeof predicate === 'number' || arguments.length === 1) {
      throw new Error(
        'Second argument should be a function or an object or an array or a string'
      );
    }
    let result;
    let callback;
    if (typeof predicate === 'object' && !(predicate instanceof Array)) {
      const obj = predicate;
      for (let key in obj) {
        callback = (item) => obj[key] === item[key];
        result = sFilter(arr, callback);
      }
      return result;
    }
    if (typeof predicate === 'function') {
      callback = predicate;
    }
    if (predicate instanceof Array) {
      const key = predicate[0];
      const value = predicate[1];
      callback = (item) => item[key] === value;
    }
    if (typeof predicate === 'string') {
      const prop = predicate;
      callback = (item) => item[prop];
    }
    result = sFilter(arr, callback);
    return result;
  }

  find(arr, predicate) {
    if (!(arr instanceof Array)) {
      throw new TypeError('First argument should be an array');
    }
    if (arguments.length === 1) {
      throw new Error('Missing second argument');
    }
    let result;
    let callback;
    if (typeof predicate === 'object' && !(predicate instanceof Array)) {
      const obj = predicate;
      callback = (item) => {
        let result;
        for (let key in obj) {
          if (obj[key] !== item[key]) {
            result = false;
            break;
          } else {
            result = true;
          }
        }
        return result;
      };
    }
    if (typeof predicate === 'function') {
      callback = predicate;
    }
    if (predicate instanceof Array) {
      const key = predicate[0];
      const value = predicate[1];
      callback = (item) => item[key] === value;
    }
    if (typeof predicate === 'string') {
      const prop = predicate;
      callback = (item) => item[prop];
    }
    result = sFind(arr, callback);
    return result;
  }

  includes(arr, el, fromPos = 0) {
    if (!(arr instanceof Array) && typeof arr !== 'string') {
      throw new TypeError('First argument should be an array or string');
    }
    if (arguments.length === 1) {
      throw new Error('Missing second argument');
    }
    let result = false;
    if (isNaN(el) && typeof el === 'number') {
      for (let i = fromPos; i < arr.length; i += 1) {
        if (isNaN(arr[i])) {
          result = true;
          break;
        }
      }
      return result;
    }
    for (let i = fromPos; i < arr.length; i += 1) {
      if (arr[i] === el) {
        result = true;
        break;
      }
    }
    return result;
  }

  map(arr, iteratee) {
    if (!(arr instanceof Array)) {
      throw new TypeError('First argument should be an array');
    }
    if (arguments.length === 1) {
      throw new Error('Missing second argument');
    }
    if (
      typeof iteratee === 'number' ||
      typeof iteratee === 'object' ||
      iteratee instanceof Array ||
      !iteratee
    ) {
      throw new TypeError('Second argument should be function or string');
    }
    const result = [];
    let callback;
    switch (typeof iteratee) {
      case 'function':
        callback = iteratee;
        break;
      case 'string':
        callback = (item) => item[iteratee];
        break;
    }
    for (let i = 0; i < arr.length; i += 1) {
      sPush(result, callback(arr[i]));
    }
    return result;
  }

  zip(...arr) {
    if (!arr.length) {
      return [];
    }
    if (arr.length === 1 && arr[0] instanceof Array) {
      return this.chunk(arr[0]);
    }
    const result = [];
    const initLength = arr[0].length;
    sForEach(arr, (item) => {
      if (!(item instanceof Array)) {
        throw new TypeError('All arguments should be arrays');
      }
      if (item.length !== initLength) {
        throw new Error('All arrays should have the same length');
      }
    });
    for (let i = 0; i < initLength; i += 1) {
      let current = [];
      for (let j = 0; j < arr.length; j += 1) {
        sPush(current, arr[j][i]);
      }
      sPush(result, current);
    }
    return result;
  }

  merge(object, ...sourceObjects) {
    // throw error if argument is null, function, array:
    if (
      typeof object !== 'object' ||
      object === null ||
      object instanceof Array
    ) {
      throw new TypeError('First argument should be an object');
    }
    if (arguments.length === 1) {
      return object;
    }
    for (let i = 0; i < sourceObjects.length; i += 1) {
      if (
        typeof sourceObjects[i] !== 'object' ||
        sourceObjects[i] === null ||
        sourceObjects[i] instanceof Array
      ) {
        throw new TypeError('All arguments should be objects');
      }
      const currentSource = sourceObjects[i];
      for (let key in currentSource) {
        const currentSourceProp = currentSource[key];
        if (object[key]) {
          if (currentSourceProp instanceof Array) {
            for (let j = 0; j < currentSourceProp.length; j += 1) {
              for (let k in currentSourceProp[j]) {
                object[key][j][k] = currentSourceProp[j][k];
              }
            }
          }
        } else {
          object[key] = currentSource[key];
        }
      }
    }
    return object;
  }

  omit(object, arr) {
    if (
      typeof object !== 'object' ||
      object === null ||
      object instanceof Array
    ) {
      throw new TypeError('First argument should be an object');
    }
    if (arr && !(arr instanceof Array)) {
      throw new TypeError('Second argument should be an array');
    }
    const result = {};
    if (arguments.length === 1) {
      for (let key in object) {
        result[key] = object[key];
      }
      return result;
    }
    for (let key in object) {
      if (!this.includes(arr, key)) {
        result[key] = object[key];
      }
    }
    return result;
  }

  omitBy(object, predicate) {
    if (
      typeof object !== 'object' ||
      object === null ||
      object instanceof Array
    ) {
      throw new TypeError('First argument should be an object');
    }
    const result = {};
    if (arguments.length === 1) {
      for (let key in object) {
        result[key] = object[key];
      }
      return result;
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('Second argument should be a function');
    }
    for (let key in object) {
      const current = object[key];
      if (!predicate(current)) {
        result[key] = current;
      }
    }
    return result;
  }

  pick(object, arr) {
    if (
      typeof object !== 'object' ||
      object === null ||
      object instanceof Array
    ) {
      throw new TypeError('First argument should be an object');
    }
    if (arr && !(arr instanceof Array)) {
      throw new TypeError('Second argument should be an array');
    }
    const result = {};
    if (arguments.length === 1) {
      for (let key in object) {
        result[key] = object[key];
      }
      return result;
    }
    for (let key in object) {
      if (this.includes(arr, key)) {
        result[key] = object[key];
      }
    }
    return result;
  }

  pickBy(object, predicate) {
    if (
      typeof object !== 'object' ||
      object === null ||
      object instanceof Array
    ) {
      throw new TypeError('First argument should be an object');
    }
    if (predicate && typeof predicate !== 'function') {
      throw new TypeError('Second argument should be a function');
    }
    const result = {};
    if (arguments.length === 1) {
      for (let key in object) {
        result[key] = object[key];
      }
      return result;
    }
    for (let key in object) {
      const current = object[key];
      if (predicate(current)) {
        result[key] = current;
      }
    }
    return result;
  }

  toPairs(object) {
    if (
      typeof object !== 'object' ||
      object === null ||
      object instanceof Array
    ) {
      throw new TypeError('First argument should be an object');
    }
    const result = [];
    if (object instanceof Map) {
      for (let key of object) {
        const current = [];
        sPush(current, key[0]);
        sPush(current, key[1]);
        sPush(result, current);
      }
      return result;
    }
    if (object instanceof Set) {
      for (let key of object) {
        const current = [];
        sPush(current, key);
        sPush(current, key);
        sPush(result, current);
      }
      return result;
    }
    for (let key in object) {
      const current = [];
      sPush(current, key);
      sPush(current, object[key]);
      sPush(result, current);
    }
    return result;
  }
}

module.exports = { Lodash };
