"use strict";

// ES5 syntax

function BaseInESFive() {
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

function StringBuilder() {
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