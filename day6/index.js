// @ts-nocheck
const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, './input.txt')).toString().split('\r\n\r\n');

/* part 1 */
const joined = input.map(g => g.replace(/\r\n/g, ''));
const uniqJoined = joined.map(g => [...new Set(g.split(''))].join('')); // get unique choices

const res = uniqJoined.reduce((acc, curr) => curr.length + acc, 0);

// console.log(res);
/* END part 1 */

/* part 2 */

const yesByAll = (answers) => {
  const allSorted = answers.join('').split('').sort().join('');
  const matches = allSorted.match(new RegExp(`([a-z])\\1{${answers.length - 1}}`, 'g'));

  return matches ? matches.length : 0;
};

const sum = input.map(i => yesByAll(i.split('\r\n'))).reduce((acc, curr) => acc + curr);

console.log(sum);

/* END part 2 */
