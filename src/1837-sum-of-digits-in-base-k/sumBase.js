// https://leetcode.com/problems/sum-of-digits-in-base-k/

function sumBase(n, k) {
    let sum = 0

    while (n > 0) {
        let remainder = n % k
        sum += remainder
        n = Math.floor(n / k)
    }

    return sum
}

console.log(sumBase(34, 6)) // => 9