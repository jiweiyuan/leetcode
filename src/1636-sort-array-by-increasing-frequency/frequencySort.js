// https://leetcode.com/problems/sort-array-by-increasing-frequency/

function frequencySort(nums) {
    let map = new Map()
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }

    return nums.sort((a, b) => {
        return map.get(a) - map.get(b) || b - a
    })
}

console.log(frequencySort([-1,1,-6,4,5,-6,1,4,1])) // => [5,-1,4,4,-6,-6,1,1,1]
