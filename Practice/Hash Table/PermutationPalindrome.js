function isPermutationPalindrome(word) {
  let oddCharSet = new Set();

  for (char of word) {
    if (oddCharSet.has(char)) {
      oddCharSet.delete(char);
    } else {
      oddCharSet.add(char);
    }
  }

  if (oddCharSet.size <= 1) {
    return true;
  } else {
    return false;
  }
}

console.log(isPermutationPalindrome("racecar"));
