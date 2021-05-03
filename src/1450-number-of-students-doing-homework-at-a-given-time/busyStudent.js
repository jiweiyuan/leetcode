// https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/

function busyStudent(startTime, endTime, queryTime) {
    let result = 0

    for (let i = 0; i < startTime.length; i++) {
        if (startTime[i] <= queryTime && queryTime <= endTime[i]) result++
    }

    return result
}

console.log(busyStudent( [9,8,7,6,5,4,3,2,1], [10,10,10,10,10,10,10,10,10], 5))