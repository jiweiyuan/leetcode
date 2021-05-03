// https://leetcode.com/problems/find-the-highest-altitude/


function largestAltitude(gain) {
    let max = 0
    let altitude = 0

    for (let i = 0; i < gain.length; i++) {
        altitude += gain[i]
        max = Math.max(max, altitude)
    }

    return max
}

console.log(largestAltitude([-4,-3,-2,-1,4,3,2]))