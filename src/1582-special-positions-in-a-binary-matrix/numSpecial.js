// https://leetcode.com/problems/special-positions-in-a-binary-matrix/

function numSpecial(mat) {
    let row = mat.length
    let col = mat[0].length

    let ans;

    ans = mat.filter(row => {
        if (!checkRow(row)) return false
        let index = row.indexOf(1)
        return checkCol(index, mat)
    });

    return ans.length
}

function checkRow(row) {
    return row.reduce((sum, num) => sum + num, 0) === 1
}

function checkCol(colIndex, mat) {
    let sum = 0
    for (let i = 0; i < mat.length; i++) {
        sum += mat[i][colIndex]
    }
    return sum === 1
}


console.log(numSpecial([[1,0,0], [0,0,1], [1,0,0]])) // => 1

