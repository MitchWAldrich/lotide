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
// assertArraysEqual(letterPositions("hello"), {h:[0], e:[1], l:[2,3], o:[4]});



