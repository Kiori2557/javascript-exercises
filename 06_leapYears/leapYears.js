const leapYears = function (year) {
  // My First solution
  // let roundYear = year / 100;
  // if (roundYear == Math.round(roundYear)) {
  //   if (roundYear % 4 == 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // } else {
  //   if (year % 4 == 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;
