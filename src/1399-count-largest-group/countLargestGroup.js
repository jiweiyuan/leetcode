// https://leetcode.com/problems/count-largest-group/

function countLargestGroup(n) {
    let map = new Map()

    let index=0
    while (++index <=n) {
        let sum = ('' + index).split('').reduce((sum, num) => sum + parseInt(num), 0)
        if (!map.get(sum)) {
            map.set(sum, [])
        }
       map.get(sum).push(index)
    }

    let max = 1
    let counter = 0

    map.forEach((value, key) => {
        if (value.length > max) {
            counter = 1
            max = value.length
        } else if (value.length === max) {
            counter++
        }
    })

    return counter
}

console.log(countLargestGroup(13)) // => 4
