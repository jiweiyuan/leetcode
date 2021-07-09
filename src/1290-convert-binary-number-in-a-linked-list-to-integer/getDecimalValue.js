// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

/**
 * Definition for singly-linked list.
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function getDecimalValue (head) {
    let num = 0
    while (head) {
        num = num * 2 + head.val
        head = head.next
    }
    return num
};
let head = new ListNode(1)
head.next = new ListNode(0)
head.next.next = new ListNode(1)

console.log(getDecimalValue(head))
