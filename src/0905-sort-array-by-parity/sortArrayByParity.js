// https://leetcode.com/problems/sort-array-by-parity/

function sortArrayByParity(nums) {
    let i = 0,
        j = nums.length - 1

    let result = []

    for (const num of nums) {
        if (num % 2 === 0) {
            result[i++] = num
        } else {
            result[j--] = num
        }
    }

    return result
}
