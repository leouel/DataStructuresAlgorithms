/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
*/

/**
 * @param {string} s
 * @return {boolean}
 */

function isValid(string) {
  if (string.length % 2 !== 0) return false;

  var stack = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    } else if (string[i] === "}" && stack[stack.length - 1] === "{") {
      stack.pop();
    } else if (string[i] === "]" && stack[stack.length - 1] === "[") {
      stack.pop();
    } else {
      stack.push(string[i]);
    }
  }

  return !stack.length;
}

function main() {
  let string = "(){([])}";
  console.log(isValid(string));
}

main();
