// https://leetcode.com/problems/intersection-of-two-arrays/

function intersection(nums1, nums2) {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    let small, big
    if (set1.size >= set2.size) {
        big = set1
        small = set2
    } else {
        big = set2
        small = set1
    }

    let result = []

    small.forEach(value => {
        if (big.has(value)) {
            result.push(value)
        }
    })

    return result
}


console.log(intersection([1, 2, 4, 5, 5, 6], [1, 1, 3, 4]))
