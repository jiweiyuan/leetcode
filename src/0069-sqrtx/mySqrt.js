// https://leetcode.com/problems/sqrtx/

function mySqrt(x) {
    let l = 0
    let r = x + 1

    while (l < r) {
        let mid = l + Math.floor((r - l) / 2)

        if (mid * mid > x) {
            r = mid
        } else {
            l = mid + 1
        }
    }

    return l - 1
}

console.log(mySqrt(8))
console.log(mySqrt(0))
