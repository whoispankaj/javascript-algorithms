/*
Given an array S of n integers, find three integers in S such that sum is closest to a given
number, target. Return the sum of the three integers. You may assume that each input would have
exactly one solution.
*/
/*
 Time Complexity: O(n square)
 Space Complexity: O(1)
*/
function threeSumClosest(numbers, target) {
  if (!numbers || numbers.length < 3) {
    return [];
  }
  let arr = numbers.sort((a, b) => a - b);
  let minDiff = Number.MAX_VALUE;
  let n = arr.length;
  let total = 0;
  for (let i = 0; i < n - 2; i++) {
    let j = i + 1;
    let k = n - 1;
    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];
      let diff = Math.abs(target - sum);
      if (sum === target) {
        k--;
      } else if (sum < target) {
        j++;
      } else if (sum > target) {
        k--;
      }
      if (diff < minDiff) {
        minDiff = diff;
        total = sum;
      }
    }
  }
  return total;
}
module.exports = threeSumClosest;
