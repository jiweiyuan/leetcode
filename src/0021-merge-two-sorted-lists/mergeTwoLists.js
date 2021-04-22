class ListNode {
    constructor(val, next) {
        this.val = val
        this.next = next === undefined ? null : next
    }
}
let l1 = new ListNode(1)
l1.next = new ListNode(3)
l1.next.next = new ListNode(5)

let l2 = new ListNode(2)
l2.next = new ListNode(4)
l2.next.next = new ListNode(5)

const mergeTwoLists  = (l1, l2) => {
    if (l2 === null) return l1
    if (l1 === null) return l2
    
    if (l2.val < l1.val) {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    } else {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    }
}
