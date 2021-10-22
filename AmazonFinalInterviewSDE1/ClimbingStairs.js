/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Constraints:
1 <= n <= 45
*/

/**
 * @param {number} n
 * @return {number}
 */
// O(n) Time | O(n) Space
var climbStairs = function (n) {
  let steps = new Array(n + 1);
  steps[0] = 1;
  steps[1] = 1;
  for (let i = 2; i <= n; i++) {
    steps[i] = steps[i - 1] + steps[i - 2];
  }
  return steps[n];
};

// O(n) Time | O(1) Space
// var climbStairs = function(n) {
//     let oneStep = 1
//     let twoStep = 1
//     for(let i = 0; i < n - 1; i++){
//         let temp = oneStep
//         oneStep += twoStep
//         twoStep = temp
//     }
//     return oneStep
// };

function main() {
  let n = 6;
  console.log(climbStairs(n));
}

main();
