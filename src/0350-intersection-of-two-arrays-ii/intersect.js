// https://leetcode.com/problems/intersection-of-two-arrays-ii/

function intersect(nums1, nums2) {
    let map1 = new Map()
    let map2 = new Map()

    let result = []

    for (const num of nums1) {
        map1.set(num, (map1.get(num) || 0) + 1)
    }

    for (const num of nums2) {
        map2.set(num, (map2.get(num) || 0) + 1)
    }

    map1.forEach((value, key) => {
        let min = Math.min(value, map2.get((key) || 0))

        while (--min > -1) {
            result.push(key)
        }
    })

    return result
}

console.log(intersect(nums1 = [4,9,5], nums2 = [9,4,9,8,4]))
