const generate = (numRows) => {
    // dp[i]: the n(th) row []
    // dp[i] = [dp[i-1][0]+ dp[i-1][1], ... , dp[i-1][dp[i-1].length-1] + 1]
    let result = []
    let i = 1

    while (i<=numRows) {
        result.push(row(i, result[i-2]))
        i++
    }

    return result
}

const row = (i, prev) => {
    if (i === 1) return [1]
    if (i === 2) return [1, 1]

    let result = [1]
    for (let i = 1; i < prev.length; i++) {
        result.push(prev[i -1] + prev[i])
    }
    result.push(1)
    return result
}

console.log(generate(5))