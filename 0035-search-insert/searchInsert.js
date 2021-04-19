// https://leetcode.com/problems/search-insert-position/

const searchInsert = (nums, target) => {
    let i = 0, j = nums.length -1

    return binarySearchInsert(i, j, nums, target)
}

const binarySearchInsert = (first, end, nums, target) => {
    // default has only one element
    if (nums[first] >= target)  return first
    if(nums[end] === target) return end
    if (nums[end] < target) return end + 1

    if (first + 1 === end) {
        // only has two element [a, b]
        return first + 1
    } else {
        // more than three element [a, b, ..., c]
        let mid = Math.floor((first + end) / 2)
        if (nums[mid] === target) return mid

        if (nums[mid] < target) return binarySearchInsert(mid + 1, end, nums, target)
        if (nums[mid] > target) return binarySearchInsert(first, mid - 1, nums, target)
    }
}
