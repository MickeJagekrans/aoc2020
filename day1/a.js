// TODO: rewrite functional?
const findSumEntries = (sum, list) => {
  for (const entry of list) {
    for (const entry2 of list) {
      if (entry + entry2 === sum) {
        return [entry, entry2];
      }
    }
  }
};

const findSumEntriesTriple = (sum, list) => {
  for (const entry of list) {
    for (const entry2 of list) {
      for (const entry3 of list) {
        if (entry + entry2 + entry3 === sum) {
          return [entry, entry2, entry3];
        }
      }
    }
  }
};

const multiplicate = (...args) => args.reduce((prev, curr) => prev * curr);

const main = (sum, list) => {
  // const entries = findSumEntries(sum, list);
  const entries = findSumEntriesTriple(sum, list);

  return multiplicate(...entries);
};

module.exports = {
  findSumEntries,
  main,
};
