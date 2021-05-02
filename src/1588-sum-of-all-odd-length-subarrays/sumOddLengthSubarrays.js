// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/

function sumOddLengthSubarrays(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if ((j - i) % 2 === 0) {
                for (let k = i; k <= j; k++) {
                    sum+= arr[k]
                }
            }
        }
    }

    return sum
}

console.log(sumOddLengthSubarrays([1,4,2,5,3]))