/*
Given n non-negative integers a1,a2..an, where each represents a point at
coordinate (i, ai).n vertical lines are drawn such that the two endpoints
of line i is at (i,ai). Find two lines, which together with x-axis forms 
a container such that the container contains the most water

Note: You may not slant the container
*/
//Complexity O(n), space complexity O(1)
function containerWithMostWater(heights) {
  if (!heights || heights.length <= 1) {
    return 0;
  }

  let i = 0,
    j = heights.length - 1;
  let max = 0;
  while (i < j) {
    max = Math.max(max, Math.min(heights[i], heights[j]) * (j - i));
    if (heights[i] < heights[j]) {
      i++;
    } else {
      j--;
    }
  }
  return max;
}
module.exports = containerWithMostWater;
