/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(array, target) {
  let tracker = {};
  for (let i = 0; i < array.length; i++) {
    const match = array[i] - target;
    if (match in tracker) {
      return [tracker[match], i];
    } else {
      tracker[array[i]] = i;
    }
  }
  return [];
}

function main() {
  let array = [2, 7, 11, 15];
  let target = 9;
  console.log(twoSum(array, target));
}

main();
