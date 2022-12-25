"use strict";

// ES6 syntax

class BaseInESSix {

  constructor(int = 0) {
    this.int = int;
  }

  plus(...n) {
    this.int = [...n].reduce((prev, next) => prev + next, this.int);
    return this;
  }

  minus(...n) {
    this.int = this.int - [...n].reduce((prev, next) => prev + next);
    return this;
  }

  multiply(n) {
    this.int = this.int * n;
    return this;
  }

  divide(n) {
    this.int = this.int / n;
    return this;
  }

  get() {
    return this.int;
  }
}

class IntBuilder extends BaseInESSix {

  constructor(int = 0) {
    super();
    this.int = int;
  }

  static random(from, to) {
    from = Math.ceil(from);
    to = Math.floor(to);
    return Math.floor(Math.random() * (to - from) + from);
  }

  mod(n) {
    this.int = this.int % n;
    return this;
  }
}