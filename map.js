const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] !== arr1[j]) {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (eqArrays(actual, expected) === false) {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(eqArrays(actual, expected));
  }
};

const map = function(array, callback) {
  let results = [];
  for (let vals of array) {
    results.push(callback(vals));
  }
  return results;
};

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// console.log(results1);

// const nums = [0, 3, 5, 12];
// const results2 = map(nums, num => num * 3);
// console.log(results2);

// const pluralize = ["dog", "house", "friend"];
// const results3 = map(pluralize, word => `${word}s`);
// console.log(results3);

// assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
// assertArraysEqual(map(nums, num => num * 3), [0, 9, 15, 36]);
// assertArraysEqual(map(pluralize, word => `${word}s`), ["dogs", "houses", "friends"]);