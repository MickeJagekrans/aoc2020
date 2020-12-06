// @ts-nocheck
const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, './input.txt')).toString().split('\r\n');

const getPos = (pos0, posMax, [op, ...ops]) => {
  if (op == null) { return pos0; }

  const halfDiff = Math.ceil((posMax - pos0) / 2);
  const [nextPos0, nextPosMax] =
    (op === 'F' || op === 'L')
      ? [pos0, posMax - halfDiff]
      : [pos0 + halfDiff, posMax];

  return getPos(nextPos0, nextPosMax, ops);
};

const getRow = (ops) => getPos(0, 127, ops.slice(0, 7));
const getCol = (ops) => getPos(0, 7, ops.slice(7, 10));

const seatIds = input.map(seat => (getRow(seat) * 8 + getCol(seat)));

const sorted = seatIds.sort((a, b) => b - a);

let res = -1;

console.log(sorted[sorted.length - 1], sorted[0]);

for (let i = sorted[sorted.length - 1]; i < sorted[0]; i += 1) {
  console.log(i, sorted.includes(i));
  if (!sorted.includes(i) && sorted.includes(i - 1) && sorted.includes(i + 1)) { res = i; break; }
}

console.log(res);
