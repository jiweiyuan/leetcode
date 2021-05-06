// https://leetcode.com/problems/lucky-numbers-in-a-matrix/

function luckyNumbers(matrix) {
    let row = matrix.length, col = matrix[0].length
    let minNumberOfRow = new Array(row).fill(10 ** 8)
    let maxNumberOfCol = new Array(col).fill(0)

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            minNumberOfRow[i] = Math.min(minNumberOfRow[i], matrix[i][j])
            maxNumberOfCol[j] = Math.max(maxNumberOfCol[j], matrix[i][j])
        }
    }

    let result = []
    for (const num of minNumberOfRow) {
        if (maxNumberOfCol.includes(num)) result.push(num)
    }

    return result
}

console.log(luckyNumbers([[3,7,8],[9,11,13],[15,16,17]])) // => 15