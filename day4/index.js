const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString().split('\r\n\r\n').map(s => s.replace(/\r\n/g, ' '));

const getParts = (entry) => entry.split(' ').map(s => s.split(':'));

const prepared = input.map(getParts);

const requiredProperties = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

const validateProperties = (requiredProps, entry) => {
  const fields = entry.flatMap(([key]) => key);

  return requiredProps.every(p => fields.includes(p));
};

const valid = prepared.filter((entry) => validateProperties(requiredProperties, entry));

console.log(valid.length);

const validateYear = (from, to, year) => {
  const yearNum = parseInt(year);

  return year.length === 4 && (yearNum >= from && yearNum <= to);
};

const validators = {
  'byr': (year) => validateYear(1920, 2002, year),
  'iyr': (year) => validateYear(2010, 2020, year),
  'eyr': (year) => validateYear(2020, 2030, year),
  'hgt': (heightStr) => {
    const res = heightStr.match(/(?<height>[0-9]{2,3})(?<unit>cm|in)/);

    if (!res) return false;

    const { unit } = res.groups;
    const heightNum = parseInt(res.groups.height);

    return unit === 'cm'
      ? heightNum >= 150 && heightNum <= 193
      : heightNum >= 59 && heightNum <= 76;
  },
  'hcl': (colorStr) => colorStr.search(/#[a-f0-9]{6}/) >= 0,
  'ecl': (colorStr) => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(colorStr),
  'pid': (id) => id.search(/^[0-9]{9}$/) >= 0,
  'cid': () => true,
};

const fullyValid = valid.filter(entry => entry.every(([key, val]) => validators[key] && validators[key](val)));

console.log(fullyValid.length);

//prepared.filter(entry => requiredProperties.every(prop => ));
