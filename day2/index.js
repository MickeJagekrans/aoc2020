const fs = require('fs');
const path = require('path');
const lib = require('./lib');

const rawInput = fs.readFileSync(path.resolve(__dirname, 'input.txt')).toString().split('\r\n');

const input = lib.formatInput(rawInput);

const validatePasswordCharCount = ([from, to, chr, password]) => {
  const charCount = password.split('').filter(c => c === chr).length

  return charCount <= to && charCount >= from;
};

const validPasswordCount = input.map(validatePasswordCharCount).filter(Boolean).length;

console.log(validPasswordCount);

// @ts-ignore
const validatePasswordPos = ([a, b, chr, password]) => !!((password[a - 1] === chr) ^ (password[b - 1] === chr));

console.log(input.map(validatePasswordPos).filter(Boolean).length);
