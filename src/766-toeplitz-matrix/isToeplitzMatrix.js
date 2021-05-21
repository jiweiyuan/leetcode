// https://leetcode.com/problems/toeplitz-matrix/

function isToeplitzMatrix(matrix) {

    for (let i = 1; i <matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] !== matrix[i-1][j-1]) return false
        }
    }

    return true
}
