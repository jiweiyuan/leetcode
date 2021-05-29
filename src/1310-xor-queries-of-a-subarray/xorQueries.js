// https://leetcode.com/problems/xor-queries-of-a-subarray/

// a ^ a ^ b = b
function xorQueries(arr, queries) {
    let result = []

    for (const [left, right] of queries) {
        let value = 0
        for (let i = left; i<=right; i++) {
            value = value ^ arr[i]
        }
        result.push(value)
    }


    return result
}


console.log(xorQueries([1,3,4,8],[[0,1],[1,2],[0,3],[3,3]]))
