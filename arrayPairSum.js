// https://leetcode.com/problems/array-partition-i/

function arrayPairSum(nums) {
    nums.sort((a, b) => a - b)

    let result = 0
    for (let i = 0; i < nums.length; i+=2) {
        result += nums[i]
    }

    return result
}

console.log(arrayPairSum([6,2,6,5,1,2]))