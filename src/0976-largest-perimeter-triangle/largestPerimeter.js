// https://leetcode.com/problems/largest-perimeter-triangle/

function largestPerimeter(nums) {
    nums.sort((a, b) => b - a)

    for (let i = 0; i < nums.length - 2; i++) {
        if (isTriangle([nums[i], nums[i+1], nums[i+2]])) {
            return nums[i] + nums[i+1] + nums[i+2]
        }
    }

    return 0
}

function isTriangle(borders) {
    borders.sort((a, b) => a - b)

    return borders[0] + borders[1] > borders[2]
}

console.log(largestPerimeter([3, 6, 2, 3]))
