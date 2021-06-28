const tail = require('../tail').tail;
const assertEqual = require('../tail').assertEqual;

const practise = tail(["Lighthouse", "Labs", "Bootcamp"]);
assertEqual(practise.length, 2);
assertEqual(practise[0], "Labs");
assertEqual(practise[1], "Bootcamp");