function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    else left++, right--;
  }
  return true;
}

function main() {
  let str = "abcxcba";
  console.log(isPalindrome(str));
}

main();
