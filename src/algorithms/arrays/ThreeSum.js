/*
Given an array S of n integers, are there elements a,b and c in S such that a+b+c = 0? Find
all unique triplets in the array which gives the sum of zero.
Note: the solution must not contain duplicate triplets
*/

/*
 Time Complexity: O(n square)
 Space Complexity: O(1)
*/
function threeSum(numbers) {
  if (!numbers || numbers.length < 3) {
    return [];
  }
  let arr = numbers.sort(function(a, b) {
    return a - b;
  });
  const results = [];
  let n = arr.length;
  for (let i = 0; i < n - 2; i++) {
    let j = i + 1;
    let k = n - 1;
    while (j < k) {
      const sum = arr[i] + arr[j] + arr[k];
      if (sum === 0) {
        results.push([arr[i], arr[j], arr[k]]);
        k--;
      } else if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      }
    }
  }
  console.log(results);
  return results;
}

module.exports = threeSum;
