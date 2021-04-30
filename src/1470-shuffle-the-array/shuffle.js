// https://leetcode.com/problems/shuffle-the-array/

function shuffle(nums, n) {
    let result = []

    for (let i = 0; i < n; i++) {
        result[2 * i] = nums[i]
        result[2 * i +1] = nums [i + n]
    }

    return result
}

console.log(shuffle([2,5,1,3,4,7], 3))
