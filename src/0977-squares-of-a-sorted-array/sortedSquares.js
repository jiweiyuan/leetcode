// https://leetcode.com/problems/squares-of-a-sorted-array/

// This solution from small to big, a better way is from big to small

function sortedSquares(nums) {
    let minIndex = nums.reduce((minIndex, num, index) => {
        return Math.abs(num) < Math.abs(nums[minIndex]) ? index : minIndex
    }, 0);

    let j = minIndex + 1;
    let i = minIndex - 1;
    let result = [nums[minIndex] ** 2]

    while (i >= 0 || j < nums.length) {
        if (j >= nums.length) {
            result.push(nums[i] ** 2)
            i--
        } else if (i < 0) {
            result.push(nums[j] ** 2)
            j++
        } else {
            if (Math.abs(nums[i]) >= Math.abs(nums[j])) {
                result.push(nums[j] ** 2)
                j++
            } else {
                result.push(nums[i] ** 2)
                i--
            }
        }
    }

    return result
}

console.log(sortedSquares([-4,-1,0,3,10]))
