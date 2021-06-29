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
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

const without = function(source, itemsToRemove) {
  let included = true;
  let keepArray = [];
  for (let item of source) {
    included = true;
    for (let removals of itemsToRemove) {
      if (removals === item) {
        included = false;
      }
    }
    if (included) {
      keepArray.push(item);
    }
  }
  return keepArray;
};

module.exports = without;

// without([1, 2, 3], [1]); // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
// without(["Iron Man", "Black Widow", "Thor"], ["Thor"]);

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(["dogs", "cats", "bunnies"], ["bunnies"]), ["dogs", "cats"]);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); 
// assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);