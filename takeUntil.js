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

const takeUntil = function(array, callback) {
  let end = 0;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      end = i;
    }
  }
  return array.slice(0, end);
};

// Input 1
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');


// Expected Output 1
[ 1, 2, 5, 7, 2 ];

//Input 2
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

//Expected Output 2
[ 'I\'ve', 'been', 'to', 'Hollywood' ];

assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(data2, x => x === ','), [ "I've", "been", "to", "Hollywood" ]);