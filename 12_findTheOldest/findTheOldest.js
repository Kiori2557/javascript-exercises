const findTheOldest = function (hi) {
  let oldest = hi[0];
  let oldestAge = 0;
  hi.forEach((person) => {
    if (!person.yearOfDeath) {
      person.yearOfDeath = new Date().getFullYear();
    }
    let personAge = person.yearOfDeath - person.yearOfBirth;
    if (personAge > oldestAge) {
      oldest = person;
      oldestAge = personAge;
    }
  });
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
