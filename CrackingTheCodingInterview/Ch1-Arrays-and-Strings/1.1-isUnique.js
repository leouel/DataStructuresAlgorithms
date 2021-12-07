/*
Implement an algorithm to determine if a string has all unique characters. 
*What if you cannot use additional data structure?
*/

/*
Problem Solving Flow:
  - Listen: Pay very close attention to any information in the problem description. You probably need it all for an optimal algorithm.
  - Example: Most examples are too small or are special cases. Debug your example. Is there any way it's a special case? Is it big enough?
  - Brute Force: Get a brute force solution as soon as possible. Don't worry about developing an efficient algorithm yet. State a naive algorithm and its runtime, then optimize from there. Don't code yet though!
  - Optimize: Walk through your brute force with BUD optimization.
      - 'B'ottlenecks
      - 'U'nnecessary Work
      - 'D'uplicated Work
  - Walkthrough: Now that you have an optimal solution, walk through your approach in detail. Make sure you understand each detail before you start coding. 
  - Implement: Your goal is to write beautiful code. Modularize your code from the beiginning and refactor to clean up anything that isn't beautiful.
    * KEEP TALKING!! Your interviewer wants to hear how you approach the problem.
  - Test: 1. Conceptual test. Walk through your code like you would for a detailed code review.
          2. Unusual or non-standard code.
          3. Hot spots, like arithmetic and null nodes.
          4. Small test cases. It’s much faster than a big test case and just as effective.
          5. Special cases and edge cases. And when you find bugs, fix them carefully!
*/

// O(n) Time | O(n) Space
function isUnique(string) {
  // 1st approach:
  // Hash Table to keep track of duplicate characters.
  let duplicates = {};
  for (let char = 0; char < string.length; char++) {
    if (string[char] in duplicates) {
      return false;
    } else {
      duplicates[string[char]] = true;
    }
  }
  return true;
}

function main() {
  let string = "abcde";
  console.log(isUnique(string));
}

main();
