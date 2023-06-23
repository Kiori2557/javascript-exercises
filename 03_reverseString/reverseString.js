const reverseString = function (input) {
  reverseInput = "";
  for (let i = input.length - 1; i >= 0; i--) {
    reverseInput += input[i];
  }
  return reverseInput;
};

// Do not edit below this line
module.exports = reverseString;
