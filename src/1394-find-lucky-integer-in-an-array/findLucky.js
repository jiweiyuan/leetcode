// https://leetcode.com/problems/find-lucky-integer-in-an-array/

function findLucky(arr) {
    let map = new Map()

    for (const num of arr) {
        map.set(num, (map.get(num) || 0 ) + 1)
    }

    let ans = -1

    map.forEach((value, key) => {
        if (value === key) {
            ans = ans === -1
                ? value
                : value > ans
                    ? value
                    : ans
        }
    })

    return ans
}

console.log(findLucky([1,2,2,3,3,3]))
