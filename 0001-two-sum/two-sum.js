// Two Sum
// LeetCode: https://leetcode.com/problems/two-sum/

// Examples 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

const twoSum = (nums, target) => {
    let i, j

    for (let i = 0; i < nums.length; ++i) {
        for (let j = i+ 1; j < nums.length; ++j) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}
