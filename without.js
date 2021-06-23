const eqArrays = function(a, b) {
  let stringA = a.join(', ');
  let stringB = b.join(', ');
  if (stringA === stringB) {
    return true;
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};
/*Implement without which will return a subset of a given array, removing unwanted elements.

This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

Here are a couple examples, but please don't limit your testing to just these scenarios:*/



const without = function(source, itemsToRemove) {
  let included = true;
  let newArray = [];
  for (let item of source) {
    included = true;
    for (let removals of itemsToRemove) {
      if (item === removals) {
        included = false;
      }
    }
    if (included) {
      newArray.push(item);
    }
  }
  console.log(newArray);
  return newArray;
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without(["dogs", "cats", "bunnies"], ["bunnies"]);

assertArraysEqual(["1", "2", "3"], [1, 2, "3"]);
assertArraysEqual(["dogs", "cats", "bunnies"], ["bunnies"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
