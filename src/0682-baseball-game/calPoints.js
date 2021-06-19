// https://leetcode.com/problems/baseball-game/

/**
 * @param {string[]} ops
 * @return {number}
 */
function calPoints(ops) {
    let stack = new Stack()

    for (const op of ops) {
        switch(op) {
            case '+':
                stack.plus()
                break

            case 'D':
                stack.double()
                break

            case 'C':
                stack.cancel()
                break
            default:
                stack.push(Number(op))
        }

    }

    return stack.sum()

};

class Stack {
    constructor() {
        this.items = []
    }

    push(item) {
        return this.items.push(item)
    }

    plus() {
        let value = this.items[this.items.length - 1] + this.items[this.items.length - 2]
        this.items.push(value)
    }

    double() {
        let value = this.items[this.items.length - 1]
        this.items.push(value * 2)
    }

    cancel() {
        this.items.pop()
    }

    sum() {
        return this.items.reduce((sum, item) => sum + item, 0)
    }
}
// console.log(calPoints(ops = ["5","-2","4","C","D","9","+","+"]))
console.log(calPoints(["5","2","C","D","+"]))
