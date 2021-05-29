// https://leetcode.com/problems/mean-of-array-after-removing-some-elements/

function trimMean(arr) {
    let numbers = [...arr]

    numbers.sort((a, b) => a - b)

    const deleteCount = Math.round(arr.length * 0.05)

    while (numbers.length > arr.length - deleteCount * 2) {
        numbers.pop()
        numbers.shift()
    }

    return numbers.reduce((sum, num) => sum + num, 0) / numbers.length
}
