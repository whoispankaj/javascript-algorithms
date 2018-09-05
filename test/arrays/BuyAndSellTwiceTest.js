const buyAndSellTwice = require('../../src/algorithms/arrays/BuyAndSellTwice');
it('should return 10', () => {
  expect(buyAndSellTwice([12, 11, 13, 9, 12, 8, 14, 13, 15])).toBe(10);
});
