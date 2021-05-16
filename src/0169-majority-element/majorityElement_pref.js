// https://leetcode.com/problems/majority-element/
// 0169-majority-element

function majorityElement(nums) {
    let count = 0
    let major = nums[0]
    for (const num of nums) {
        if (num === major) {
            count++
        } else {
            count--
            if (count === 0) {
                major = num
                count = 1
            }
        }
    }

    return major
}

console.log(majorityElement([8,8,7,7,7]))
console.log(majorityElement([47,47,72,47,72,47,79,47,12,92,13,47,47,83,33,15,18,47,47,47,47,64,47,65,47,47,47,47,70,47,47,55,47,15,60,47,47,47,47,47,46,30,58,59,47,47,47,47,47,90,64,37,20,47,100,84,47,47,47,47,47,89,47,36,47,60,47,18,47,34,47,47,47,47,47,22,47,54,30,11,47,47,86,47,55,40,49,34,19,67,16,47,36,47,41,19,80,47,47,27]))
