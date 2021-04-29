// https://leetcode.com/problems/running-sum-of-1d-array/

function runningSum(nums) {

    return nums.reduce((result, num) => {
        if (result.length === 0) {
            result.push(num)
        } else {
            result.push(result[result.length -1] + num)
        }

        return result
    }, [])
}

console.log(runningSum([1, 1, 1, 1,]))
console.log(runningSum([2, 3, 4, 5]))
