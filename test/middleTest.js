const middle = require("../middle");
const assert = require('chai').assert;

describe('#middle', () => {
  it('returns [2] for [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it('returns [3, 5] for [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it('returns ["is"] for ["Coding", "is", "fun"]', () => {
    assert.deepEqual(middle(["Coding", "is", "fun"]), ["is"]);
  });
  it('returns undefined when no array is provided', () => {
    assert.deepEqual(middle(), undefined);
  });
});

// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 5]);