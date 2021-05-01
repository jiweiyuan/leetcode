// https://leetcode.com/problems/minimum-time-visiting-all-points/
function minTimeToVisitAllPoints(points) {
    let result = 0

    for (let i = 0; i < points.length - 1; i++) {
        result += distance(points[i],  points[i+1])
    }

    return result
}

function distance(x, y) {
    let xDistance = Math.abs(x[0] - y[0])
    let yDistance = Math.abs(x[1] - y[1])

    return Math.max(xDistance, yDistance)
}


console.log(minTimeToVisitAllPoints([[1,1], [3,4], [-1,1]]))