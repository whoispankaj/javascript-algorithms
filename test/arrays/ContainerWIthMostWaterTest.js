const containerWithMostWater = require('../../src/algorithms/arrays/ContainerWithMostWater');
it('should return 0', () => {
  expect(containerWithMostWater([])).toBe(0);
});
it('should return 0', () => {
  expect(containerWithMostWater(null)).toBe(0);
});
it('should return 0', () => {
  expect(containerWithMostWater([10])).toBe(0);
});
it('should return x', () => {
  expect(containerWithMostWater([1, 2, 3, 4, 5])).toBe(6);
});
