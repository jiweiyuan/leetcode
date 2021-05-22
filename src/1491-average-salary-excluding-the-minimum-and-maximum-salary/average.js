// https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/

function average(salary) {
    let max = 0
    let min = 10 ** 8

    let sum = 0
    for (const s of salary) {
        max = Math.max(max, s)
        min = Math.min(min, s)
        sum += s
    }

    return (sum - max - min) / (salary.length - 2)
}
