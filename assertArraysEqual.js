const eqArrays = function (arr1, arr2) {
  if (arr1 === undefined) return "arr1 is undefined";
  if (arr2 === undefined) return "arr2 is undefined";
  let isEqual = 
  arr1.length === arr2.length ? 
  arr1.every(function (element, index) {
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

assertArraysEqual([1, 2, 3], [1, 3, 2]);
assertArraysEqual(["Fred", "Latoya"], ["Fred", "Latoya"]);
assertArraysEqual([0, "zero", ""], [0, "zero", "none"]);

