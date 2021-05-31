// https://leetcode.com/problems/matrix-cells-in-distance-order/

function allCellsDistOrder(rows, cols, rCenter, cCenter) {
    let buckets = []

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let distance = Math.abs(i - rCenter) + Math.abs(j - cCenter)

            if (!buckets[distance]) {
                buckets[distance] = []
            }
            buckets[distance].push([i, j])
        }
    }

    let res = []

    for (const bucket of buckets) {
        res.push(...bucket)
    }

    return res
}


console.log(allCellsDistOrder(rows = 2, cols = 3, rCenter = 1, cCenter = 2))
