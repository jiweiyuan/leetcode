// https://leetcode.com/problems/maximum-ice-cream-bars/

function maxIceCream(costs, coins) {
    // sort from small to big
    costs.sort((a, b) => a - b)

    let result = 0
    while (coins >= costs[result]) {
        coins -= costs[result]
        result ++
    }

    return result
}

console.log(maxIceCream([1, 3, 2, 4, 1], 7))
