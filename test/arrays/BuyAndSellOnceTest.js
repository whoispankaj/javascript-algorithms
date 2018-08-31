const buyAndSellOnce = require('../../src/algorithms/arrays/BuyAndSellStockOnce');
it('should return 5', () => {
  expect(buyAndSellOnce([7, 1, 5, 3, 6, 4])).toBe(5);
});

it('should return 0', () => {
  expect(buyAndSellOnce([7, 6, 4, 3, 1])).toBe(0);
});
