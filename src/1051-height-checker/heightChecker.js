// https://leetcode.com/problems/height-checker/

function heightChecker(heights) {
    let present = [...heights]
    let expected = heights.sort((a, b) => a - b)

    let result = 0
    for (let i = 0; i < heights.length; i++) {
        if (present[i] !== expected[i]) result++
    }
    return result
}

console.log(heightChecker([5,1,2,3,4],[1,2,3,4,5]))
