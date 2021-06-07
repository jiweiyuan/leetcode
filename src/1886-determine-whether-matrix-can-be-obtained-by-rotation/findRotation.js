// https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/

function findRotation(mat, target) {
    return equals(mat, target) || equals(rotate(mat), target) || equals(rotate(rotate(mat)), target)
        || equals(rotate(rotate(rotate(mat))), target)
}

function rotate(mat) {
    let n = mat.length;

    let result = new Array(n).fill(null).map(_ => new Array(n).fill(null))

    for (let i = 0; i < n; i++) {
        for (let j = n - 1; j >= 0; j--) {
            result[i][n- 1 - j] = mat[j][i]
        }
    }

    return result
}

function equals(mat1, mat2) {
    let row = mat1.length;
    let col = mat1[0].length;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (mat1[i][j] !== mat2[i][j]) {
                return false
            }
        }
    }

    return true
}


console.log(findRotation(mat = [[0,0,0],[0,1,0],[1,1,1]], target = [[1,1,1],[0,1,0],[0,0,0]]))
