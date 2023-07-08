const fibonacci = function (number) {
  let array = [1, 1];
  if (number < 0) {
    return "OOPS";
  } else if (number == 0) {
    return array[number];
  } else {
    for (let i = 2; i <= number - 1; i++) {
      let sum = array[i - 2] + array[i - 1];
      array.push(sum);
    }
    return array[number - 1];
  }
};

// Do not edit below this line
module.exports = fibonacci;
