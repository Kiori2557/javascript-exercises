const repeatString = function (text, number) {
  msg = "";
  if (number < 0) {
    return "ERROR";
  }
  for (let i = 0; i < number; i++) {
    msg += text;
  }
  return msg;
};
// Do not edit below this line
module.exports = repeatString;
