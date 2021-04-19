// https://leetcode.com/problems/maximum-subarray/
// Tips: dp

const maxSubArray = (nums) => {
    // dp(i) = Value of maximum SubArray([0,...,i]) contains i
    // dp(i) = dp(i-1) > 0 ? dp(i-1) + nums[i] : nums[i]

    let sums = []
    sums[0] = nums[0]
    for (let i = 1; i < nums.length; ++i) {
        sums[i] = Math.max(sums[i -1] + nums[i], nums[i])
    }

    return Math.max(...nums)
}

