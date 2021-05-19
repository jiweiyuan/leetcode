// https://leetcode.com/problems/minimum-absolute-difference/

function minimumAbsDifference(arr) {

    arr.sort((a, b) => a - b)

    let min = arr[arr.length-1] - arr[0]
    for (let i = 0; i < arr.length - 1; i++) {
        min = Math.min(min, arr[i+1] - arr[i])
    }

    let result = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (min === arr[i+1] - arr[i]) result.push([arr[i], arr[i+1]])
    }

    return result
}

console.log(minimumAbsDifference([4, 2, 1, 3]))
