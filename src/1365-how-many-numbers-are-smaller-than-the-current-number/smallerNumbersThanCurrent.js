// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

function smallerNumbersThanCurrent(nums) {
    let result = []

    for (let i = 0; i < nums.length; i++) {
        result[i] = 0
        for (let j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] > nums[j]) result[i]++
        }
    }

    return result
}


console.log(smallerNumbersThanCurrent([8, 1, 2, 3]))
