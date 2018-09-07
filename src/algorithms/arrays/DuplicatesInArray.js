/*
    Find whether the array contains duplicates. Return true if it contains
    duplicates else return false;
*/
//Solution 1
/* function duplicatesInArray(numbers) {
  if (!numbers || numbers.length <= 1) {
    return false;
  }
  numbers = numbers.sort();
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] === numbers[i - 1]) {
      return true;
    }
  }
  return false;
} */
//Solution 2
/* function duplicatesInArray(numbers) {
  if (!numbers || numbers.length <= 1) {
    return false;
  }
  var numMap = {};
  let isUnique = true;
  isUnique = numbers.every(function(num) {
    if (numMap[num]) {
      return false;
    } else {
      numMap[num] = true;
      return true;
    }
  });
  return !isUnique;
} */
//Solution 3
function duplicatesInArray(numbers) {
  if (!numbers || numbers.length <= 1) {
    return false;
  }
  let numMap = {};
  let duplicateFound = false;
  duplicateFound = numbers.some(num => {
    if (numMap[num]) {
      return true;
    } else {
      numMap[num] = true;
      return false;
    }
  });
  return duplicateFound;
}
module.exports = duplicatesInArray;
