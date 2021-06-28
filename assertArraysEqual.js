const eqArrays = require("./eqArrays");

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (eqArrays(actual, expected) === false) {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(eqArrays(actual, expected));
  }
};

module.exports = assertArraysEqual;
