// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/

function countStudents(students, sandwiches) {
    let result = 0

    while (result < sandwiches.length) {
        if (students[0] === sandwiches[0]) {
            students.shift()
            sandwiches.shift()
            result = 0
        } else {
            students.push(students.shift())
            result++
        }
    }

    return result
}

console.log(countStudents([1,1,0,0], [0,1,0,1]))
