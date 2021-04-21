const plusOne = (nums) => {
    for (let i= nums.length - 1; i >= 0; --i) {
        if (nums[i] !== 9 ) {
            // current number isn't 9
            nums[i] = nums[i] + 1
            return nums

        } else {
            // current number is 9
            nums[i] = 0

            if (i === 0) {
                // special end points: the first element
                nums.unshift(0)
                i = 1;
            }
        }
    }
}

console.log(plusOne([1, 2, 3,4]))
console.log(plusOne([0]))
console.log(plusOne([9,9,9,9]))