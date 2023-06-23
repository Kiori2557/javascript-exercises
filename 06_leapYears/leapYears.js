const leapYears = function (year) {
  let roundYear = year / 100;
  if (roundYear == Math.round(roundYear)) {
    if (roundYear % 4 == 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (year % 4 == 0) {
      return true;
    } else {
      return false;
    }
  }
};

// Do not edit below this line
module.exports = leapYears;
