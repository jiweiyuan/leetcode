// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
// 0378-kth-smallest-element-in-a-sorted-matrix
// TODO
function kthSmallest(matrix, k) {
    if (!matrix || matrix.length === 0 || matrix[0] === 0) return -1

    let len = matrix.length

    let l = matrix[0][0]
    let r = matrix[len-1][len-1]

    while (l < r) {
        let m = l + Math.floor((r - l) / 2)

        let countLessThan
    }

    return l


}
