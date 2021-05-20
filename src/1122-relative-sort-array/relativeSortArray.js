// https://leetcode.com/problems/relative-sort-array/

function relativeSortArray(arr1, arr2) {
    let map = new Map()

    let max = 0
    let min = 10 ** 5
    for(const num of arr1) {
        max = Math.max(num, max)
        min = Math.min(num, min)
        map.set(num, (map.get(num) || 0) + 1)
    }

    let result = []

    for (let num of arr2) {
        while (map.get(num)) {
            result.push(num)
            map.set(num, map.get(num) -1)
        }
    }

    let num = min
    while (num <= max) {
        while (map.get(num)) {
            result.push(num)
            map.set(num, map.get(num) -1)
        }
        num++
    }

    return result
}
// console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6])) // => [2,2,2,1,4,3,3,9,6,7,19]
console.log(relativeSortArray([28,6,22,8,44,17],[22,28,8,6])) // => [22,28,8,6,17,44]

