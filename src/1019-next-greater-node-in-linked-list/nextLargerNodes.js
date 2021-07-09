// https://leetcode.com/problems/next-greater-node-in-linked-list/
import {ListNode} from "../../utils/ListNode.js";

var nextLargerNodes = function(head) {
    let result = []

    outer:
        for (let i = head; i; i = i.next) {
            if (!i.next) {
                result.push(0)
                return result
            }

            let j = i.next
            while (j) {
                if (j.val > i.val) {
                    result.push(j.val)
                    continue outer
                }

                j = j.next
            }
            result.push(0)
        }

    return result

};

let head = new ListNode(2)
head.next = new ListNode(1)
head.next.next = new ListNode(5)

console.log(nextLargerNodes(head))
