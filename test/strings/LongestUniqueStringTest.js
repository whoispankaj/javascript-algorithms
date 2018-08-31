const longestUniqueString = require('../../src/algorithms/strings/LongestUniqueString');
it('should return 6', () => {
  expect(longestUniqueString('aabcdefeaeehigje')).toBe(6);
});
it('should return 14', () => {
  expect(longestUniqueString('aabcdefeaeehigjeklmonprst')).toBe(14);
});
it('should return 1', () => {
  expect(longestUniqueString('aaaaa')).toBe(1);
});
it('should return 1', () => {
  expect(longestUniqueString('a')).toBe(1);
});
it('should return 0', () => {
  expect(longestUniqueString('')).toBe(0);
});
it('should return 0', () => {
  expect(longestUniqueString(null)).toBe(0);
});
