const getRow = (rowIndex) => {
    if (rowIndex === 0) return [1]
    if (rowIndex === 1) return [1, 1]

    let i = 1
    let result = getRow(1)
    while (rowIndex > i) {
        result = getRowByPrev(result)
        i++
    }

    return result
}

const getRowByPrev = (prev) => {
    let result = [1]
    for (let i=1; i<prev.length; ++i) {
        result[i] = prev[i-1] + prev[i]
    }
    result.push(1)
    return result
}

console.log(getRow(3))