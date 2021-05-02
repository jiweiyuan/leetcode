// https://leetcode.com/problems/brick-wall/

function leastBricks(wall) {
    let map = new Map

    for (let row of wall) {
        let edge = 0
        for (let j = 0; j < row.length - 1; j++) {
            edge += row[j]
            map.set(edge, (map.get(edge) || 0) + 1)
        }
    }

    return wall.length - Math.max(...map.values(), 0)
}

console.log(leastBricks([[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]))
console.log(leastBricks([[1],[1],[1]]))
console.log(leastBricks([[1000],[1000],[1000]]))