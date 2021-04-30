// https://leetcode.com/problems/single-number-ii/

function singleNumber(nums) {
    let map = new Map()

    for (let num of nums) {
        map.set(num, map.has(num) ? map.get(num) + 1 : 1)
    }

    for (let [key, val] of map) {
        if (val === 1) return key
    }
}

console.log(singleNumber([0,1,0,1,0,1,99]))
