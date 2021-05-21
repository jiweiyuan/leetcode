//https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/

function nearestValidPoint(x, y, points) {
    let result = -1
    let minDistance = 10 ** 8

    for (let i = 0; i < points.length; i++) {
        if (points[i][0] === x || points[i][1] === y) {
            let distance = manhattanDistance([x, y], points[i])
            if (distance < minDistance) {
                result = i
                minDistance = distance
            }
        }
    }
    return result
}

function manhattanDistance(point1, point2) {
    return Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1])
}

console.log(nearestValidPoint(3,4, [[1,2],[3,1],[2,4],[2,3],[4,4]]))
