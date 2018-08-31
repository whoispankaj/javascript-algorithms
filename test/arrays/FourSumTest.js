const fourSum = require('../../src/algorithms/arrays/FourSum');

it('should return 2 triplet', () => {
  expect(fourSum([1, 0, -1, 0, 2, -2], 0).length).toBe(3);
});

it('should return 1 triplet', () => {
  expect(fourSum([1, 0, -1, 0], 0).length).toBe(1);
});

it('should return 0 triplet', () => {
  expect(fourSum([1, 0, -1], 0).length).toBe(0);
});
it('should return 0 triplet', () => {
  expect(fourSum([1], 0).length).toBe(0);
});
