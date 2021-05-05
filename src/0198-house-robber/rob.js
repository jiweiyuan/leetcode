// https://leetcode.com/problems/house-robber/
/**
 *
 * @param nums
 * dp[i]: maximum amount of money you can rob in i-th house
 * dp[i] = Math.max(dp[i-1], nums[i] + dp[i - 2])
 */

function rob(nums) {
    if (nums.length === 1) return nums[0]

    let dp1 = nums[0]
    let dp2 = Math.max(nums[0], nums[1])

    for (let i = 2; i < nums.length; i++) {
        let temp = dp2
        dp2 = Math.max(dp2, nums[i] + dp1)
        dp1 = temp
    }

    return dp2
}

console.log(rob([2, 7, 9, 3, 1]))