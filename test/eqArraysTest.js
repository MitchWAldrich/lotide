const assertEqual = require('../eqArrays').assertEqual;
const eqArrays = require('../eqArrays').eqArrays;

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["Fred", "Latoya"], ["Fred", "Latoya"]), true);
assertEqual(eqArrays([1, 2, "red"], [1, 2, "green"]), true);
