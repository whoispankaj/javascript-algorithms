function longestUniqueString(str) {
  if (!str) {
    return 0;
  }
  if (str && str.length <= 1) {
    return str.length;
  }
  let startIdx = 0;
  let currentIdx = 0;
  let maxLength = 0;
  let charMap = {};
  //aabcde fe ae e higjeklmonprst
  while (startIdx < str.length && currentIdx < str.length) {
    //adding the === 0 condition because the index of the first element is 0 and is stored in the map
    if (
      charMap[str.charAt(currentIdx)] ||
      charMap[str.charAt(currentIdx)] === 0
    ) {
      let length = currentIdx - startIdx;
      if (length > maxLength) {
        maxLength = length;
      }
      startIdx = charMap[str.charAt(currentIdx)] + 1;
      currentIdx = startIdx;
      charMap = {};
    } else {
      charMap[str.charAt(currentIdx)] = currentIdx;
      currentIdx++;
    }
  }
  //after the loop ends, calculate the length of max unique based on startIdx and currentIdx and compare it to current max
  maxLength = Math.max(maxLength, currentIdx - startIdx);
  return maxLength;
}

module.exports = longestUniqueString;
