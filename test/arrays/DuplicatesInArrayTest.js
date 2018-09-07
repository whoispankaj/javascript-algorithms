let duplicatesInArray = require('../../src/algorithms/arrays/DuplicatesInArray');
it('should return true', () => {
  expect(duplicatesInArray([3, 2, 5, 7, 4, 3, 1])).toBe(true);
});
it('should return false', () => {
  expect(duplicatesInArray([1, 2, 3, 4, 5])).toBe(false);
});
it('should return false', () => {
  expect(duplicatesInArray([])).toBe(false);
});
it('should return false', () => {
  expect(duplicatesInArray([1])).toBe(false);
});
