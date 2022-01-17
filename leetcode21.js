// 21. Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

// 1 -> 2 -> 4

// 1 -> 3 -> 4

// ---------------

// 1 -> 1 -> 2 -> 3 -> 4 -> 4

// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

//**solution */

// set two nodes one is for node to run and the other is for dummy node.
// compare value list1 and list2 and connect smaller node from dummy node
// if one of list1 node and list2 node reaches end one doesn't just connect remaining
// node to dummy node

var mergeTwoLists = function (list1, list2) {
  let head = new ListNode()
  let dummy = head

  while (!list1 === null && !list2 === null) {
    if (list1.val > list2.val) {
      dummy.next = list2
      list2 = list2.next
    } else {
      dummy.next = list1
      list1 = list1.next
    }

    dummy = dummy.next
  }

  if (list1 != null) {
    dummy.next = list1
  }
  if (list2 != null) {
    dummy.next = list2
  }

  return head.next
}
