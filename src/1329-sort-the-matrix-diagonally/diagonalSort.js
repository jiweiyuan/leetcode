// https://leetcode.com/problems/sort-the-matrix-diagonally/

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {

    let map = splitDiagonal(mat)
    sortDiagonal(map)
    return joinDiagonal(map, mat.length, mat[0].length)
};

function splitDiagonal(mat) {
    let map = new Map()

    for (let i = 0, row = mat.length; i < row; i++) {
        for (let j = 0, col = mat[0].length; j < col; j++) {
            let row = i, col = j
            while (row !== 0 && col !== 0) {
                row--
                col--
            }
            let key = `${row}-${col}`
            if(!map.get(key)){
                map.set(key, [])
            }
            map.get(key).push(mat[i][j])
        }
    }
    return map
}

function sortDiagonal(map) {
    map.forEach(value => {
        value.sort((a, b) => a - b)
    })
}

function joinDiagonal(map, row, col) {
    let mat = new Array(row).fill(null).map(_ => new Array(col).fill(null))

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let row = i, col = j
            while (row !== 0 && col !== 0) {
                row--
                col--
            }
            let key = `${row}-${col}`
            let arr = map.get(key)
            mat[i][j] = arr.shift()
        }
    }

    return mat
}

console.log(diagonalSort([[3,3,1,1],[2,2,1,2],[1,1,1,2]]))
console.log(diagonalSort([[2, 2],[1, 1]]))
