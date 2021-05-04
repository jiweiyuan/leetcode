// https://leetcode.com/problems/range-sum-query-immutable/

class NumArray {
    constructor(nums) {
        this.sums = new Map()
        for (let i = 0; i < nums.length; i++) {
            this.sums.set(i, i === 0 ? nums[i] : this.sums.get(i-1) + nums[i])
        }
    }

    sumRange(left, right) {
        if (left === 0) return this.sums.get(right)
        return this.sums.get(right) - this.sums.get(left - 1)
    }
}

let numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2)); // return (-2) + 0 + 3 = 1
console.log(numArray.sumRange(2, 5)); // return 3 + (-5) + 2 + (-1) = -1
console.log(numArray.sumRange(0, 5)); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
