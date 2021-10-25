/*
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []
*/

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
  if (lists === null || lists.length === 0) return null;
  return mergeKLists(lists, 0, lists.length - 1);
}

function mergeKLists(lists, start, end) {
  if (start === end) return lists[start];
  const mid = (start + end) / 2;
  const left = mergeKLists(lists, start, mid);
  const right = mergeKLists(lists, mid + 1, end);
  return merge(left, right);
}

function merge(list1, list2) {
  let result = new ListNode(-1);
  let current = result;
  while (list1 !== null || list2 !== null) {
    if (list1 === null) {
      current.next = list2;
      list2 = list2.next;
    } else if (list2 === null) {
      current.next = list1;
      list1 = list1.next;
    } else if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  return result.next;
}

// const mergeKLists = (lists) => {
//   if (lists.length === 0) return null;

//   let interval = 1;
//   while (interval < lists.length) {
//     for (let i = 0; i + interval < lists.length; i = i + interval * 2) {
//       lists[i] = mergeTwoLists(lists[i], lists[i + interval]);
//     }
//     interval *= 2;
//   }

//   return lists[0];
// };
// var mergeTwoLists = (l1, l2) => {
//   let dummy = new ListNode(0);
//   let head = dummy;

//   while (l1 && l2) {
//     if (l1.val < l2.val) {
//       dummy.next = l1;
//       dummy = dummy.next;
//       l1 = l1.next;
//     } else {
//       dummy.next = l2;
//       dummy = dummy.next;
//       l2 = l2.next;
//     }
//   }

//   if (l1 === null) {
//     dummy.next = l2;
//   }

//   if (l2 === null) {
//     dummy.next = l1;
//   }

//   return head.next;
// };

function main() {}

main();
