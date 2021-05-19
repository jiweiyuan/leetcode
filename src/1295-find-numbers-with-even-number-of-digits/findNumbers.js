// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

function findNumbers(nums) {
    let result = 0

    for (const num of nums) {
        if (('' + num).length % 2 === 0) result++
    }

    return result
}

console.log(findNumbers([12,345,2,6,7896]))