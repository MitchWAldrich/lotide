const assertEqual = require('./assertEqual');

const head = function([a]) {
  return [a][0];
};

module.exports = {
  assertEqual,
  head
};