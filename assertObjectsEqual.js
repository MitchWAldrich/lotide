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

const eqObjects = function(object1, object2) {
  const keysOne = Object.keys(object1);
  const keysTwo = Object.keys(object2);
  if (keysOne.length !== keysTwo.length) {
    return false;
  }
  for (const key of keysOne) {
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key]) === true) {
        return true;
      }
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else if (eqObjects(actual, expected) === false) {
    console.log(`🔴🔴🔴Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({ a: 1, b: "2"}, { a: 1, b: "2"});
assertObjectsEqual({ c: 3, d: "four"},{ c: 3, d: 4});
assertObjectsEqual({ a: 5, b: 6}, {a: 5, b: 6});