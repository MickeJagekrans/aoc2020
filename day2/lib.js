// @ts-nocheck
const formatRule = ([rule, pwd]) => {
  const [range, chr] = rule.split(' ');
  const formattedRule = [range.split('-').map(i => parseInt(i)), chr];

  return [formattedRule, pwd].flat(2);
};

const splitAndTrimLine = (line) => line.split(':').map(s => s.trim());

const formatInput = (lines) =>
  lines
    .map(splitAndTrimLine)
    .map(formatRule);

module.exports = {
  formatInput,
};
