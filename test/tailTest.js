const tail = require('../tail');
const assertEqual = require('../assertEqual');

const practise = tail(["Lighthouse", "Labs", "Bootcamp"]);
assertEqual(practise.length, 2);
assertEqual(practise[0], "Labs");
assertEqual(practise[1], "Bootcamp");