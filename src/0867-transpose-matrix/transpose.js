// https://leetcode.com/problems/transpose-matrix/

function transpose(matrix) {
    let row = matrix.length
    let col = matrix[0].length

    let result = new Array(col).fill(null).map(_ => [])

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            result[j][i] = matrix[i][j]
        }
    }

    return result
}


console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]))
