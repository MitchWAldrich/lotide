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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      continue;
    } else if (results.hasOwnProperty(sentence[i]) === false) {
      const charOne = sentence[i];
      results[charOne] = [i];
    } else if (results.hasOwnProperty(sentence[i]) === true) {
      let charTwo = sentence[i];
      let multipleOccurences = [];
      for (let j = 0; j < sentence.length; j++) {
        if (sentence[j] === charTwo) {
          multipleOccurences.push(j);
          results[charTwo] = multipleOccurences;
        }
      }
    }
  }
  // console.log(results);
  return results;
};


letterPositions("hello");
letterPositions("Lighthouse in the house");
// console.log(`return: ${letterPositions("hello")}`);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("Lighthouse in the house").i, [1, 10]);


