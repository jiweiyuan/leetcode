// https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/

// https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/discuss/1032143/Java-Detailed-Explanation-DP-with-Graph-Demo
function kthLargestValue(matrix, k) {
    let rows = matrix.length
    let cols = matrix[0].length

    let values = []
    let dp = new Array(rows).fill(null).map(_ => new Array(cols).fill(null))


    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let x = (i - 1 <  0) ? 0 : dp[i-1][j]
            let y = (j - 1 < 0 )? 0 : dp[i][j-1]
            let z = (i - 1 < 0 || j - 1 < 0) ? 0 : dp[i-1][j-1]

            let value = x ^ y ^ z ^ matrix[i][j]

            dp[i][j] = value
            values.push(value)
        }
    }

    values.sort((a, b) => a - b)
    return values[rows * cols  - k] || 0
}


console.log(kthLargestValue([[5, 2], [1, 6]], 1))
