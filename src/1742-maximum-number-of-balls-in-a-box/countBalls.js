// https://leetcode.com/problems/maximum-number-of-balls-in-a-box/

function countBalls(lowLimit, highLimit) {
    const MAX = 9 * 6
    let counts = new Array(MAX).fill(0)

    for (let i = lowLimit; i <= highLimit; i++) {
        let sum = ('' + i).split('').reduce((sum, digit) => sum + parseInt(digit), 0)
        counts[sum] = counts[sum] + 1
    }

    return Math.max(...counts)
}

console.log(countBalls(5, 15))
console.log(countBalls(1, 100000))
