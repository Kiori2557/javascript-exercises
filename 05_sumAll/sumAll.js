const sumAll = function (first, last) {
  let sum = 0;
  let startInteger = first;
  let endInteger = last;
  if (
    first < 0 ||
    last < 0 ||
    typeof first != "number" ||
    typeof last != "number"
  ) {
    return "ERROR";
  }
  if (first > last) {
    startInteger = last;
    endInteger = first;
  }
  for (let i = startInteger; i <= endInteger; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
