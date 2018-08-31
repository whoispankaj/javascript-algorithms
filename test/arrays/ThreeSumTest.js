const threeSum = require('../../src/algorithms/arrays/ThreeSum');

it('should return 1 triplet', () => {
  expect(threeSum([2, 3, 4, -3, -5, 0]).length).toBe(2);
});

it('should return 0 triplet', () => {
  expect(threeSum([1, 2, 3, 4, 5]).length).toBe(0);
});

it('should return 0 triplet', () => {
  expect(threeSum([]).length).toBe(0);
});

it('should return 0 triplet', () => {
  expect(threeSum([2, -2]).length).toBe(0);
});
