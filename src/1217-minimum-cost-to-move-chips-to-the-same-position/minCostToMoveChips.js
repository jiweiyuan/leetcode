// https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/

function minCostToMoveChips(position) {
    let oddNums = 0
    let evenNums = 0

    for (const num of position) {
        if (num % 2 === 0) {
            oddNums++;
        } else {
            evenNums++
        }
    }

    return Math.min(oddNums, evenNums)
}
