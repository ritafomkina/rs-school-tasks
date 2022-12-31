"use strict";

// ES5 syntax

function BaseInESFive(str) {
  this.str = str || '';
}

BaseInESFive.prototype = {
  get() {
    return this.str;
  },

  plus(value) {
    this.str = this.str.concat(value);
    return this;
  },

  minus(n) {
    this.str = this.str.slice(0, this.str.length - n + 1);
    return this;
  },

  multiply(int) {
    this.str = new Array(int + 1).join(this.str);
    return this;
  },

  divide(n) {
    this.str = this.str.slice(0, Math.floor(this.str.length / n));
    return this;
  },
};

function StringBuilder(str) {
  BaseInESFive.call(this, str);
  this.str = str || '';
}

StringBuilder.prototype = Object.create(BaseInESFive.prototype, {

  constructor: {
    value: StringBuilder,
    enumerable: false,
    writable: true,
  },

  remove: {
    value: function (value) {
      this.str = this.str
        .split('')
        .filter((char) => char != value)
        .join('');
      return this;
    },
    enumerable: false,
    writable: true,
  },

  sub: {
    value: function (from, n) {
      this.str = this.str.split('').splice(from, n).join('');
      return this;
    },
    enumerable: false,
    writable: true,
  },
});

let strBuilder = new StringBuilder('Hello'); // 'Hello';
console.log(strBuilder
  .plus(' all', '!')                         // 'Hello all!'
  .minus(4)                                  // 'Hello '
  .multiply(3)                               // 'Hello Hello Hello '
  .divide(4)                                 // 'Hell';
  .remove('l')                               // 'He';
  .sub(1,1)                                  // 'e';
  .get());