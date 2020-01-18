const items = require('./item');
const bestSet = require('./bestSet');

const sizeBag = 6;

const setItems = bestSet(items, sizeBag);
console.log(setItems);
