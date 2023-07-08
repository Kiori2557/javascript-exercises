const palindromes = function (string) {
  string = string.toLowerCase();
  let array = string.split("");
  function remove(word) {
    while (array.includes(word)) {
      array.splice(array.indexOf(word), 1);
    }
  }

  remove("!");
  remove(" ");
  remove(",");
  remove(".");

  let array2 = [];
  array.forEach((word) => {
    array2.push(word);
  });

  array2.reverse();
  let result = array.join("");
  let reverseResult = array2.join("");
  return result == reverseResult;
};

// Do not edit below this line
module.exports = palindromes;
