// https://leetcode.com/problems/shift-2d-grid/

function shiftGrid(grid, k) {
    let m = grid.length
    let n = grid[0].length

    let result = grid.map(row => [...row])

    let rowDiff = Math.floor(k / n) % m
    let colDiff = k % n

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let rowIndex = rowDiff + i, colIndex = colDiff + j
            if (colIndex >= n) {
                colIndex = colIndex % n
                rowIndex ++
            }

            rowIndex = rowIndex % m
            let res = k % n
            result[rowIndex][colIndex] = grid[i][j]
        }
    }

    return result
}


console.log(shiftGrid([[1,2,3],[4,5,6],[7,8,9]], k = 1))
