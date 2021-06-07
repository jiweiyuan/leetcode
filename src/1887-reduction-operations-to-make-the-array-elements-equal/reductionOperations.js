// https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/

function reductionOperations(nums) {
    nums.sort((a, b) => a -b)

    let ans = 0
    let level = 0
    let prev = nums[0]

    for (let i = 1; i < nums.length; i++) {
        if(nums[i] !== prev) {
            level++
            prev = nums[i]
        }
        ans += level
    }

    return ans
}

console.log(reductionOperations([1,1,2,2,3])) // => 4
