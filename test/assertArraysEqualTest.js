const assertArraysEqual = require("../assertArraysEqual");


assertArraysEqual([1, 2, 3], [1, 3, 2]);
assertArraysEqual(["Fred", "Latoya"], ["Fred", "Latoya"]);
assertArraysEqual([0, "zero", "none"], [0, "zero", "none"]);