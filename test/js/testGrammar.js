let oldArray = Array;

const multiply = __ => {
  for (let key of this) {
    this[key + this.length] = this[key] * this[key];
  }
};

global.Array = function (...args) {
  let array = new oldArray(...args);
  array.multiply = multiply;
  return array;
};

let a = [1, 2, 3, 4, 5];
a.multiply();
console.log(a);

