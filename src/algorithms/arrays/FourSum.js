/*
Given an array S of n integers, are there elements a,b,c and d in S
such that a+b+c+d = target?. Find all unique quadruplets in the array which gives
the sum of the target.
Note: the solution set must not contain duplicate quadruplets
For example, given array S = [1, 0, -1, 0, -2, 2] and target = 0
A solution set is:
[
    [-1, 0, 0, 1],
    [-2, -1, 1, 2],
    [-2, 0, 0, 2]
]

*/
//Time Complexity O(n cube)
function fourSum(numbers, target) {
  if (!numbers || numbers.length < 3) {
    return [];
  }
  //sort ascending
  let arr = numbers.sort((a, b) => a - b);
  let n = arr.length;
  let i = 0;
  let j = n - 1;
  let result = [];
  //need atleast a minimum of 4 elements.so check for i and j
  while (i < n - 3 && j > 2) {
    let k = i + 1;
    let l = j - 1;
    while (k < l) {
      let sum = arr[i] + arr[j] + arr[k] + arr[l];
      if (sum === target) {
        result.push([arr[i], arr[k], arr[l], arr[j]]);
        k++;
      } else if (sum < target) {
        k++;
      } else if (sum > target) {
        l--;
      }
    }
    if (arr[i] + arr[j] === target) {
      i++;
    } else if (arr[i] + arr[j] < target) {
      i++;
    } else if (arr[i] + arr[j] > target) {
      j--;
    }
  }

  return result;
}
module.exports = fourSum;
