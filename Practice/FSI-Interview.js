// Given a sorted array of distinct integers and a target value,
// return the index if the target is found. If not, return the
// index where it would be if it were inserted in order.
//
// Example 1:
// - Input:
//     numList = [1, 3, 4, 5, 6]
//     target = 5
// - Output: 3
//
// Example 2:
// - Input:
//     numList = [1, 3, 4, 5, 6]
//     target = 2
// - Output: 1

function searchInsert(numList, target) {
  if (!isSorted(numList)) {
    // Time O(nlogn)
    numList.sort((a, b) => a - b);
    console.log(`Not sorted! => SORTED: ${numList}`);
  }
  // Time O(n)
  for (let i = 0; i < numList.length; i++) {
    if (target === numList[i] || target < numList[i]) {
      return i;
    }
  }
  return numList.length;
}

function isSorted(array) {
  // Time O(n)
  let i = 0;
  while (array[i]) {
    if (array[i] > array[i + 1]) return false;
    i++;
  }
  return true;
}

console.log(searchInsert([1, 3, 4, 5, 6], 5));
console.log(searchInsert([1, 3, 4, 5, 6], 7));
console.log(searchInsert([], 7));
console.log(searchInsert([5, 8, 6, 11, 9, 10], 7));
