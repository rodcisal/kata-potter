import calculateCost from './calculateCost';

describe('calculateBasketCost', () => {
  describe('calculate the cost of a basket of books', () => {
    it('zero books are passed it should return 0', () => {
      const cost = calculateCost([]);
      expect(cost).toBe(0);
    });

    it('one book is passed it should return 8', () => {
      const cost = calculateCost([1]);
      expect(cost).toBe(8);
    });

    it('two of the same books are pased it should make no discount', () => {
      const cost = calculateCost([1, 1]);
      expect(cost).toBe(16);
    });

    it('three of the same books are pased it should make no discount', () => {
      const cost = calculateCost([1, 1, 1]);
      expect(cost).toBe(24);
    });

    it('four of the same books are pased it should make no discount', () => {
      const cost = calculateCost([1, 1, 1, 1]);
      expect(cost).toBe(32);
    });

    it('five of the same books are pased it should make no discount', () => {
      const cost = calculateCost([1, 1, 1, 1, 1]);
      expect(cost).toBe(40);
    });

    it('two different books are passed it should make a 5% discount on the total', () => {
      const cost = calculateCost([1, 2]);
      expect(cost).toBe(15.2);
    });

    it('five books, two of them different are passed it should make a 10% discount on the total', () => {
      const cost = calculateCost([1, 1, 3, 3, 3]);
      expect(cost).toBe(38.4);
    });

    it('seven books, five of them different are passed it should cost 46', () => {
      const cost = calculateCost([1, 2, 3, 3, 3, 4, 5]);
      expect(cost).toBe(46);
    });

    it('one set of books plus two pairs of different ones it should cost ', () => {
      const cost = calculateCost([1, 1, 2, 2, 3, 3, 4, 5]);
      expect(cost).toBe(51.2);
    });

    it('two sets of four books it should cost 51.2', () => {
      const cost = calculateCost([1, 1, 2, 2, 3, 3, 4, 4]);
      expect(cost).toBe(51.2);
    });

    it('two sets, one of five and another of three it should cost 51.6', () => {
      const cost = calculateCost([1, 1, 2, 2, 3, 3, 4, 5]);
      expect(cost).toBe(51.2);
    });

    it('one set of five plus 5 of the same book it should cost 70', () => {
      const cost = calculateCost([1, 2, 3, 4, 5, 5, 5, 5, 5, 5]);
      expect(cost).toBe(70);
    });
  });
});
