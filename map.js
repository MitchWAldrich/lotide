const eqArrays = function(arr1, arr2) {
  if (arr1 === undefined) return "arr1 is undefined";
  if (arr2 === undefined) return "arr2 is undefined";
  let isEqual =
  arr1.length === arr2.length ?
    arr1.every(function(element, index) {
      return element === arr2[index];
    }) : false;
  return isEqual;
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
  
  const results = [];
  for (let vals of array) {
    results.push(callback(vals));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

const nums = [0, 3, 5, 12];
const results2 = map(nums, num => num * 3);
console.log(results2);

const pluralize = ["dog", "house", "friend"];
const results3 = map(pluralize, word => `${word}s`);
console.log(results3);

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(nums, num => num * 3), [0, 9, 15, 36]);
assertArraysEqual(map(pluralize, word => `${word}s`), ["dogs", "houses", "friends"]);