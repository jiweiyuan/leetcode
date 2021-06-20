// https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/

var numberOfRounds = function(startTime, finishTime) {
    let start = startTime.split(':').map(time => Number(time))
    let end = finishTime.split(':').map(time => Number(time))
    let minutes = [0, 15, 30, 45]


    let countHours = 0
    let countMinutes = 0

    if (start[0] > end[0]) {
        countHours = (24 - start[0] - 1 + end[0]) * 4
    } else if (start[0] <= end[0]) {
        countHours = (start[0] - end[0] - 1) * 4

    }

    countMinutes += minutes.filter(item => item >= start[1]).length
    countMinutes += minutes.filter(item => item <= end[1]).length

    return countHours + countMinutes - 1
};


console.log(numberOfRounds("20:00", "06:00"))
