/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

*The overall run time complexity should be O(log (m+n)).
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// O(n + m) Time; n = nums1.length & m = nums2.length | O(1) Space
function getMedian(nums1, nums2) {
  let i = 0;
  let j = 0;
  let count;
  let m1 = 0;
  let m2 = 0;
  // total number of elements is even
  if ((nums1.length + nums2.length) % 2 === 0) {
    for (
      count = 0;
      count <= Math.floor((nums1.length + nums2.length) / 2);
      count++
    ) {
      m2 = m1;
      if (i !== nums1.length && j !== nums2.length) {
        m1 = nums1[i] > nums2[j] ? nums2[j++] : nums1[i++];
      } else if (i < nums1.length) {
        m1 = nums1[i++];
      } else {
        m1 = nums2[j++];
      }
    }
    return (m1 + m2) / 2;
  } else {
    // total number of elements is odd
    for (
      count = 0;
      count <= Math.floor((nums1.length + nums2.length) / 2);
      count++
    ) {
      if (i !== nums1.length && j !== nums2.length) {
        m1 = nums1[i] > nums2[j] ? nums2[j++] : nums1[i++];
      } else if (i < nums1.length) {
        m1 = nums1[i++];
      } else {
        // when i is already pointing at the end of nums1
        // we have to move to nums2
        m1 = nums2[j++];
      }
    }
    return m1;
  }
}

// Brute Force approach
// O(nlog(n)) Time | O(n+m) Space; n = nums1.length, m = nums2.length
// function findMedianSortedArrays(nums1, nums2) {
//   let array = [...nums1, ...nums2];
//   //O(nlog(n)
//   array.sort((a, b) => a - b);
//   let middle = Math.floor(array.length / 2);
//   let median = 0;
//   if (array.length % 2 === 0) {
//     //O(1)
//     median = (array[middle] + array[middle - 1]) / 2;
//   } else {
//     //O(1)
//     median = array[middle];
//   }
//   return median;
// }

function main() {
  let nums1 = [2, 3, 5, 8];
  let nums2 = [10, 12, 14, 16, 18, 20];
  // console.log(findMedianSortedArrays(nums1, nums2));
  console.log(getMedian(nums1, nums2));
}

main();
