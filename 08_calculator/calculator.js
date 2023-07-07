const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((sum, number) => sum + number, 0);
};

const multiply = function (...numbers) {
  return numbers.reduce((result, number) => result * number);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (times) {
  let array = [];
  for (let i = 0; i <= times; i++) {
    if (i == 0) {
      array.push(1);
    } else {
      array.push(i);
    }
  }
  return array.reduce((result, number) => result * number);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
