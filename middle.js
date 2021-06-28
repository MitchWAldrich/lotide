const eqArrays = function(arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (arr2[j] !== arr1[j]) {
        return false;
      }
    }
  }
  return true
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

const middle = function(array) {
  let middleIndex = [];
  let evenIndex = 0;
  let oddIndex = 0;
  if (array.length <= 2) {
    middleIndex = [];
  } else if (array.length % 2 === 0) {
    evenIndex = array.length / 2;
    middleIndex.push(evenIndex, (evenIndex +1));

  } else if (array.length % 2 === 1) {
    oddIndex = array.length / 2;
    oddIndex = Math.ceil(oddIndex);
    middleIndex.push(oddIndex);
    }
  // console.log("evenIndex", evenIndex);
  // console.log("oddIndex", oddIndex);
  return middleIndex;
};

// array of 1 or 2 tests
middle([1]) // => []
middle([1, 2]) // => []

// even number tests
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

// odd number tests
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

// assert array tests

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 5]);
