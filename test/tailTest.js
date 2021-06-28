const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Labs', 'Bootcamp'] for ['Lighthouse', 'Labs', 'Bootcamp']", () => {
    assert.deepEqual(tail(['Lighthouse', 'Labs', 'Bootcamp']), ['Labs', 'Bootcamp']);
  });
  it("returns ['the', 'coding'] for ['All', 'the', 'coding']", () => {
    assert.deepEqual(tail(["All", "the", "coding"]), ['the', 'coding']);
  });
  it("returns ['2', '4'] for ['1', '2', '4']", () => {
    assert.deepEqual(tail(["1", "2", "4"]), ['2', '4']);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
  it('returns undefined when no array is provided', () => {
    assert.deepEqual(tail(), undefined);
  });
});