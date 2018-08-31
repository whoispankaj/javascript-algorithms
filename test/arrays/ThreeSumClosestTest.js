const threeSumClosest = require('../../src/algorithms/arrays/ThreeSumClosest');

it('should return 2', () => {
  expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2);
});
