const chai = require('chai');
const a = require('./a');

const { expect } = chai;

describe('a', () => {
  describe('findSumEntries', () => {
    context('given a list', () => {
      it('should return the two entries which sum to 2020', () => {
        const list = [1, 17, 2018, 2000, 20];

        expect(a.findSumEntries(2020, list)).to.have.members([2000, 20]);
      });
    });

    context('given a different list', () => {
      it('should return the two entries which sum to 2020', () => {
        const list = [1982, 38, 7, 16 , 23, 1999];

        expect(a.findSumEntries(2020, list)).to.have.members([1982, 38]);
      });
    });
  });

  describe('main', () => {
    context('given a list', () => {
      it('should return the product of the two terms in a list whose sums are what is specified', () => {
        const list = [1, 17, 2018, 2000, 20];

        expect(a.main(2020, list)).to.eql(40000);
      });
    });

    context('given a different list', () => {
      it('should return the product of the two terms in a list whose sums are what is specified', () => {
				const list = [1982, 38, 7, 16 , 23, 1999];

        expect(a.main(2020, list)).to.eql(75316);
      });
    });
  });
});
