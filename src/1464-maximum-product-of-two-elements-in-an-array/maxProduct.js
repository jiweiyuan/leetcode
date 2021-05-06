// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/

function maxProduct(nums) {
    let num1 = 0, num2 = 0

    // find two bigger numbers in three numbers
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] >= Math.min(num1, num2)) {
            num1 = Math.max(num1, num2)
            num2 = nums[i]
        }
    }

    return (num1 - 1) * (num2 - 1)
}

console.log(maxProduct([3,4,5,2]))
