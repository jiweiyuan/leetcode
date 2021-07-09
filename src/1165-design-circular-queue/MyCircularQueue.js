// https://leetcode.com/problems/design-circular-queue/

class MyCircularQueue {
    constructor(k) {
        this.queue = new Array(k)
        this.front = this.end = 0
        this.size = k
        this.length = 0
    }

    enQueue(value) {
        if (this.isFull()) return false
        this.queue[this.end] = value
        this.length++
        this.end++
        this.end = this.end === this.size ? 0 : this.end
        return true
    }

    deQueue() {
        if (this.isEmpty()) return false
        this.queue[this.front] = undefined
        this.length--

        if(++this.front === this.size) {
            this.front = 0
        }

        return true
    }


    Front() {
        if (this.isEmpty()) return -1
        return this.queue[this.front]
    }

    Rear() {
        if (this.isEmpty()) return -1
        return this.queue[this.end === 0? this.size-1 : this.end -1]
    }

    isEmpty () {
        return this.length === 0
    }
    isFull() {
        return  this.length === this.size
    }
}

const cycle = new MyCircularQueue(3)
cycle.enQueue(1)
cycle.enQueue(2)
cycle.enQueue(3)
cycle.enQueue(4)
console.log(cycle.Rear())
