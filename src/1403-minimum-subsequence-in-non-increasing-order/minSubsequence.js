// https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/

function minSubsequence(nums) {
    nums.sort((a, b) => a - b)

    let sums = [nums[0]]

    for (let i = 1; i < nums.length; i++) {
        sums.push(sums[sums.length - 1] + nums[i])
    }

    let result = []

    for (let i = sums.length - 1; i > 0; i--) {
        result.push(nums[i])

        if (sums[sums.length - 1] - sums[i - 1] > (sums[i - 1])) {
            return result
        }
    }

    return nums
}

console.log(minSubsequence([4,3,10,9,8]))
