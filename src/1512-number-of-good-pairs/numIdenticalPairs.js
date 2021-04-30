// https://leetcode.com/problems/number-of-good-pairs/

function numIdenticalPairs(nums) {
    if (nums.length <= 1) return 0

    let result = 0
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                result++
            }
        }
    }

    return result
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]))