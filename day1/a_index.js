const fs = require('fs');
const path = require('path');
const a = require('./a.js');

const input = fs.readFileSync(path.resolve(__dirname, 'input.txt')).toString().split('\r\n').map(s => parseInt(s));
console.log(input);

const res = a.main(2020, input);

console.log(res);
