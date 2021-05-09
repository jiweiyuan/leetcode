// https://leetcode.com/problems/sign-of-the-product-of-an-array/

function arraySign(nums) {
    let result = 1

    for (let num of nums) {
        if (num=== 0) return 0
        if (num < 0) {
            result *= -1
        }
    }

    return  result
}

//
console.log(arraySign([-1,-2,-3,-4,3,2,1])) // => 1
