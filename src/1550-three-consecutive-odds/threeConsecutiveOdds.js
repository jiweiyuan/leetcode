// https://leetcode.com/problems/three-consecutive-odds/

function threeConsecutiveOdds(arr) {
    let counter = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            counter = 0
        } else {
            counter++
            if (counter === 3) return true
        }
    }

    return false
}


console.log(threeConsecutiveOdds([2,6,4,1])) // => false
console.log(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12])) // => true
