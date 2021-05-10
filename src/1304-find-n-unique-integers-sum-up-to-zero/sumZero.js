// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/

function sumZero(n) {
    if (n === 1) return [0]

    let result = []
    let i = 1
    let sum = 0
    while (i < n) {
        sum += i
        result.push(i)
        i++
    }
    result.push(-sum)

    return result
}

console.log(sumZero(10))