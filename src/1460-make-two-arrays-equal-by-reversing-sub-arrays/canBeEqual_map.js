// https://leetcode.com/problems/make-two-arrays-equal-by-reversing-sub-arrays/
// a better solution

function canBeEqual(target, arr) {
    let map = new Map()

    for (const num of target) {
        map.set(num, (map.get(num) || 0) + 1)
    }

    for (const num of arr) {
        if (!map.get(num)) return false
        map.set(num, map.get(num) - 1)
    }
    return true
}

console.log(canBeEqual([1,2,3,4], [2,4,1,3])) // => false