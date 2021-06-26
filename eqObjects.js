const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function(object1, object2) {
  const keysOne = Object.keys(object1);
  const keysTwo = Object.keys(object2);
  if (keysOne.length !== keysTwo.length) {
    return false;
  }
  for (const key of keysOne) {
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key]) === true) {
        return true;
      }
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false);

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false);