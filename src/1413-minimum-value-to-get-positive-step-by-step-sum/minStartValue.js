// https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/

function minStartValue(nums) {
    let minStartValue = 1
    let minSum = 10 ** 8
    let sum = 0

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        minSum = Math.min(sum, minSum)
    }

    if (minSum >= 0) {
        return minStartValue
    }

    return -minSum + 1
}

console.log(minStartValue([1, -2, -3]))
