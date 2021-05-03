// https://leetcode.com/problems/flipping-an-image/

function flipAndInvertImage(image) {
    for (let row of image) {
        row.reverse()

        for (let i = 0; i < row.length; i++) {
            row[i] = row[i] === 0 ? 1 : 0
        }
    }

    return image
}

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))

