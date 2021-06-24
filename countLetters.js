const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  let countOfLetters = { };
  for (const char of string) {
    if (char === " ") {
      continue
    } else if (countOfLetters.hasOwnProperty(char) === false) {
      countOfLetters[char] = 1;
    } else if (countOfLetters.hasOwnProperty(char) === true) {
      countOfLetters[char] += 1;
    }
  };
  return countOfLetters;
}

countLetters("Hello");
console.log(countLetters("Hello"));

countLetters("Red Blue");
console.log(countLetters("Red Blue"));

countLetters("Blue Jays");
console.log(countLetters("Blue Jays"));

countLetters("abcdefghijklmnopqrstuvwxyz");
console.log(countLetters("abcdefghijklmnopqrstuvwxyz"));

