// https://leetcode.com/problems/matrix-diagonal-sum/

function diagonalSum(mat) {
    let result = 0
    for (let i = 0, j = mat.length - 1; i < mat.length; i++, j--) {
        result += ( i ===  j ? mat[i][i] : mat[i][i] + mat[i][j])
    }
    return result
}

console.log(diagonalSum([[1,2,3],[4,5,6], [7,8,9]]))