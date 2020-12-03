// @ts-nocheck
const fs = require('fs');
const path = require('path');

const rawInput = fs.readFileSync(path.resolve(__dirname, 'input.txt')).toString().split('\r\n');

// console.log(rawInput);

const traverse = (len, [_, ...tail], x = 0, acc = 0) => {
  if (tail.length === 0) return acc;

  const nextX = (x + 3) % len;
  acc = tail[0][nextX] === '#' ? acc + 1 : acc;

  return traverse(len, tail, nextX, acc);
};

console.log(traverse(rawInput[0].length, rawInput));


const traverseSlope = (len, dx, dy, input, x = 0, acc = 0) => {
  const newInput = input.slice(dy, input.length);

  if (newInput.length === 0) return acc;

  const nextX = (x + dx) % len;

  acc = newInput[0][nextX] === '#' ? acc + 1 : acc;

  return traverseSlope(len, dx, dy, newInput, nextX, acc);
};

const len = rawInput[0].length;

const hits = [
  traverseSlope(len, 1, 1, rawInput),
  traverseSlope(len, 3, 1, rawInput),
  traverseSlope(len, 5, 1, rawInput),
  traverseSlope(len, 7, 1, rawInput),
  traverseSlope(len, 1, 2, rawInput),
];

console.log(hits);
console.log(hits.reduce((acc, curr) => acc * curr));
