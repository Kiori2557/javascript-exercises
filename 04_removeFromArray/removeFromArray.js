const removeFromArray = function (array, ...removeItemArray) {
  let filteredArray = array;
  for (let i = 0; i < removeItemArray.length; i++) {
    filteredArray = filteredArray.filter((item) => item !== removeItemArray[i]);
  }
  return filteredArray;
};
// Do not edit below this line
module.exports = removeFromArray;
