// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/

function countNegatives(grid) {
    let m = grid.length
    let n = grid[0].length

    let result = 0
    let index = n

    // find the index of first negative number in first row
    for (let i = 0; i < n; i++) {
        if (grid[0][i] < 0) {
            index = i
            result += (n - index)
            break
        }
    }

    // loop all rows from second row, index represent index of first negative number in j rows
    for (let j = 1; j < m; j++) {
        while(index >= 1 && grid[j][index - 1] < 0) {
            index--
        }

        result += (n - index)
    }

    return result
}

console.log(countNegatives( [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))
console.log(countNegatives([[3, 2], [1, 0]]))
console.log(countNegatives([[3,-1,-3,-3,-3],[2,-2,-3,-3,-3],[1,-2,-3,-3,-3],[0,-3,-3,-3,-3]]))
