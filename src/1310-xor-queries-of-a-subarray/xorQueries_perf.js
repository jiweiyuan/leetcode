// perf

function xorQueries_perf(arr, queries) {
    let result = []

    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i-1] ^ arr[i]
    }

    for (const query of queries) {
        if (query[0] === 0) {
            result.push(arr[query[1]])
        } else {
            result.push(arr[query[0]] ^ arr[query[1]])
        }
    }

    return result
}
