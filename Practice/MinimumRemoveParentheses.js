/*
Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:
  It is the empty string, contains only lowercase characters, or
  It can be written as AB (A concatenated with B), where A and B are valid strings, or
  It can be written as (A), where A is a valid string.
  
*/

function removeParentheses(string) {
  let validString = [];
  let stack = [];
  for (let i = 0; i < string.length; i++) {
    if (!stack.length && string[i] === ")") {
      continue;
    }
    if (string[i] === "(") {
      stack.push(string[i]);
    }
    if (string[i] === ")") {
      stack.pop();
    }
    validString.push(string[i]);
  }
  for (let i = validString.length - 1; i >= 0; i--) {
    if (validString[i] === "(" && stack.length) {
      stack.pop();
      validString.splice(i, 1);
    }
  }
  return validString.join("");
}

function main() {
  // let string = "pay(p(a)l)credit)";
  let string = "a)b(c)d";
  console.log(removeParentheses(string));
}

main();
