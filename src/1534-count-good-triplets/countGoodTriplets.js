// https://leetcode.com/problems/count-good-triplets/

function countGoodTriplets(arr, a, b, c) {
    let result = 0

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (Math.abs(arr[i] -arr[j]) <= a
                    && Math.abs(arr[j] - arr[k]) <= b
                    && Math.abs(arr[i] - arr[k]) <= c
                ) {
                    result++
                }
            }
        }
    }

    return result
}

console.log(countGoodTriplets([3,0,1,1,9,7],  7, 2, 3))