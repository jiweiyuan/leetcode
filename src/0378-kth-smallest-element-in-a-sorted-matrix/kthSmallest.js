// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/

function kthSmallest(matrix, k) {
    if (!matrix || matrix.length === 0 || matrix[0] === 0) return -1

    let len = matrix.length

    let l = matrix[0][0]
    let r = matrix[len-1][len-1]

    while (l < r) {
        let m = l + Math.floor((r - l) / 2)

        let counter = countLessThan(matrix, m)

        if (counter >= k) {
            r = m
        } else {
            l = m + 1
        }
    }

    return l
}

function countLessThan(matrix, k) {
    let result = 0

    for (const row of matrix) {
        for (const num of row) {
            if (num <= k) result++
        }
    }

    return result
}

console.log(kthSmallest(matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8))
