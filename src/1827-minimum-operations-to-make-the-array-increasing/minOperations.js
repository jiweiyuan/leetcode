// https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/

function minOperations(nums) {
    let step = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i-1]) {
            step += (nums[i-1] - nums[i] + 1)
            nums[i] = nums[i-1] + 1
        }
    }

    return step
}

console.log(minOperations([1, 1, 1]))