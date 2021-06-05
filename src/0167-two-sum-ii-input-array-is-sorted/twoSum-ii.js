// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

function twoSum(numbers, target) {

    for (let i= 0, len = numbers.length; i < numbers.length; i++) {
        let result = findTarget(i+ 1, len, numbers, target - numbers[i])
        if (result !== -1) {
            return [i + 1, result + 1]
        }
    }

}

function findTarget(l, r, numbers, target) {
    while (l < r) {
        let m = l + Math.floor((r - l) / 2)
        if (numbers[m] === target) return m

        if (numbers[m] > target) {
            r = m
        } else {
            l = m + 1
        }

    }
    return numbers[l] === target ? l : -1
}


console.log(twoSum([2,7,11,15], target = 9))
