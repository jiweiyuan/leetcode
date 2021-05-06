// https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/

function oddCells(m, n, indices) {
    let row = new Array(m).fill(0)
    let col = new Array(n).fill(0)

    for (let index of indices) {
        row[index[0]] = row[index[0]] === 0 ? 1 : 0
        col[index[1]] = col[index[1]] === 0 ? 1 : 0
    }
    let rowOdd = row.filter(item => item === 1).length
    let colOdd = col.filter(item => item === 1).length

    // mathematical skill
    return rowOdd * n + colOdd * m - 2 * rowOdd * colOdd
}

console.log(oddCells(2,  3, [[0,1],[1,1]]))
console.log(oddCells(2,  2, [[1,1],[0,0]]))