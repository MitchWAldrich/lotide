const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(a) {
  let newArray = a.slice(1);
  return newArray;
};

const practise = ["Lighthouse", "Labs", "Bootcamp"];
tail(practise);
assertEqual(practise.length, 3);