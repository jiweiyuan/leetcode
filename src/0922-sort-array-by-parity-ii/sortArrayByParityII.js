// https://leetcode.com/problems/sort-array-by-parity-ii/

function sortArrayByParityII(nums) {
    let odd = 0,
        even = 1,
        len = nums.length

    while (odd < len || even < len) {
        while (odd < len && nums[odd] % 2 === 0) {
            odd += 2
        }
        while (even < len && nums[even] % 2 === 1) {
            even += 2
        }
        if(even < len && odd < len) {
            swap(odd, even, nums)
        }
    }

    return nums
}

function swap (i, j, nums) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}

console.log(sortArrayByParityII([4,2,5,7]))
