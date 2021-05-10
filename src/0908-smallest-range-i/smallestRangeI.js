// https://leetcode.com/problems/smallest-range-i/

function smallestRangeI(A, K) {
    if (A.length < 2) return 0

    let min = 10 ** 8
    let max = 0

    for (const num of A) {
        min = Math.min(min, num)
        max = Math.max(max, num)
    }

    if (max - min <= 2 * K) {
        return 0
    } else {
        return max - min - (2 * K)
    }
}

console.log(smallestRangeI([0, 10], 2))