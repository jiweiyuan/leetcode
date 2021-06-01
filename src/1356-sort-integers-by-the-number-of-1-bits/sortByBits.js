// https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/

function sortByBits(arr) {
    arr.sort((a, b) => {
        let aBits = countOneOfBits(a)
        let bBits = countOneOfBits(b)
        return aBits === bBits ? (a - b) : (aBits - bBits)
    })

    return arr
}

function countOneOfBits(num) {
    let result  = 0

    while (num >= 1) {
        result = result + (num % 2)
        num = Math.floor(num / 2)
    }

    return result
}

console.log(countOneOfBits(3))
console.log(sortByBits([0,1,2,3,4,5,6,7,8]))
