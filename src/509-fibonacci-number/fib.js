// https://leetcode.com/problems/fibonacci-number/
// 509-fibonacci-number

function fib(n) {
    if (n === 0) return 0
    if (n <= 2) return 1

    let pre = 1
    let cur = 1

    let index = 2
    while (++index <= n) {
        let temp = cur
        cur = pre + cur
        pre = temp
    }

    return cur
}

console.log(fib(4)) // => 3
