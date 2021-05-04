// https://leetcode.com/problems/climbing-stairs/

function climbStairs(n) {
    // dp(n) = dp(n-1) + dp(n -2)

    let map = new Map()
    map.set(1, 1)
    map.set(2, 2)

    for (let i = 3; i<= n; i++) {
        map.set(i, map.get(i -1) + map.get(i - 2))
    }

    return map.get(n)
}

console.log(climbStairs(3))