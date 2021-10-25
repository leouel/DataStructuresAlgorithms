/*
Given a string s, return the longest palindromic substring in s.
*/

/**
 * @param {string} string
 * @return {string}
 */
// O(n^2) Time | O(n) Space
function longestPalindromicSubstring(string) {
  let currentLongest = [0, 1];
  let longest = [];
  for (let i = 0; i < string.length; i++) {
    const odd = getLongestPalindromeFrom(string, i - 1, i + 1);
    const even = getLongestPalindromeFrom(string, i - 1, i);
    // const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    if (odd[1] - odd[0] > even[1] - even[0]) {
      longest = odd;
    } else {
      longest = even;
    }
    // currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest;
    if (currentLongest[1] - currentLongest[0] > longest[1] - longest[0]) {
      currentLongest = currentLongest;
    } else {
      currentLongest = longest;
    }
  }
  return string.slice(currentLongest[0], currentLongest[1]);
}

function getLongestPalindromeFrom(string, leftIdx, rightIdx) {
  while (leftIdx >= 0 && rightIdx < string.length) {
    if (string[leftIdx] === string[rightIdx]) {
      leftIdx--;
      rightIdx++;
    } else {
      break;
    }
  }
  return [leftIdx + 1, rightIdx];
}

function main() {
  let string = "babad";
  console.log(longestPalindromicSubstring(string));
}

main();
