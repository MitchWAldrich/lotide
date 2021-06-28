const assertArraysEqual = require("./assertArraysEqual");

const middle = function(array) {
  let middleIndex = [];
  let evenIndex = 0;
  let oddIndex = 0;
  if (array.length <= 2) {
    middleIndex = [];
  } else if (array.length % 2 === 0) {
    evenIndex = array.length / 2;
    middleIndex.push(evenIndex, (evenIndex + 1));

  } else if (array.length % 2 === 1) {
    oddIndex = array.length / 2;
    oddIndex = Math.ceil(oddIndex);
    middleIndex.push(oddIndex);
  }
  return middleIndex;
};

module.exports = middle;
