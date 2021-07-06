// https://leetcode.com/problems/find-the-winner-of-the-circular-game/
// 1823
class Node {
    constructor(value, prev, next) {
        this.value = value
        this.prev = prev
        this.next = next
    }
}

function findTheWinner (n, k) {
    let length = n
    let prevNode
    let firstNode
    let lastNode
    for (let i = 1; i <= n; i++) {
        let node = new Node(i)
        if (i === 1) {
            firstNode = node
        }
        if (i === n) {
            lastNode = node
        }
        if (prevNode) {
            prevNode.next = node
            node.prev = prevNode
        }

        prevNode = node
    }

    firstNode.prev = lastNode
    lastNode.next = firstNode

    let currentNode = firstNode
    while (length > 1) {
        let step = k % length

        let index = 0
        currentNode = currentNode.prev
        while (++index <= step) {
            currentNode = currentNode.next
        }

        if (length === 2) {
            currentNode = currentNode.next
        } else {
            currentNode.prev.next = currentNode.next
            currentNode.next.prev = currentNode.prev
            currentNode = currentNode.next
        }

        length--
    }

    return currentNode.value
};

console.log(findTheWinner(5, 2)) // => 3
console.log(findTheWinner(5, 4)) // => 1
