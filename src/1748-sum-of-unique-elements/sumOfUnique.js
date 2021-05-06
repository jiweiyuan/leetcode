// https://leetcode.com/problems/sum-of-unique-elements/

function sumOfUnique(nums) {
    let map = new Map()
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }

    let result = 0
    map.forEach((value, key) => {
        if (value === 1) result += key
    })

    return result
}


console.log(sumOfUnique([1,2,3,2])) // => 4
