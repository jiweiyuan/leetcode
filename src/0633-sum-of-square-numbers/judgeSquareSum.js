// https://leetcode.com/problems/sum-of-square-numbers/

function judgeSquareSum(c) {
    let n = Math.floor(Math.sqrt(c))
    for (let a = 0; a <= n; a++) {
        let b = Math.sqrt(c - a * a)
        if (b === Math.floor(b)) return true
    }

    return  false
}

console.log(judgeSquareSum(1))
console.log(judgeSquareSum(2))
console.log(judgeSquareSum(3))
console.log(judgeSquareSum(4))