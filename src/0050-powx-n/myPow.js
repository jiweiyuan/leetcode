// https://leetcode.com/problems/powx-n/

function myPow(x, n) {
    return n > 0 ? pow(x, n) : 1 / pow(x, -n)
}


function pow(x, n) {
    if (n === 0) return 1

    let val = pow(x, Math.floor(n/2))
    if (n % 2 === 0) {
        return val * val
    } else {
        return val * val * x
    }
}
