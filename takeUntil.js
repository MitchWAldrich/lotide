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