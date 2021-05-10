// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

function subtractProductAndSum(n) {
    let sum = 0
    let product = 1

    while (n > 0) {
        let remainder = n % 10
        sum += remainder
        product *= remainder
        n = Math.floor(n / 10)
    }

    return product - sum
}

console.log(subtractProductAndSum(4421)) // => 21