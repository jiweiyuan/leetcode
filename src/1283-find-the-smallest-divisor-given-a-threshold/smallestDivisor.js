// https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/

function smallestDivisor(nums, threshold) {
    let l = 1
    let r = Math.max(...nums) + 1

    while (l < r) {
        let mid = l + Math.floor((r - l)/2)

        if (countResultOfDivision(mid, nums) <= threshold) {
            r = mid
        } else {
            l = mid + 1
        }
    }

    return l
}


function countResultOfDivision(divisor, nums) {
    let result = 0

    for (const num of nums) {
        result = result + Math.ceil(num / divisor)
    }

    return result
}

console.log(smallestDivisor([1,2,5,9], 6)) // => 5
console.log(smallestDivisor([44,22,33,11,1], 5)) // => 44
console.log(smallestDivisor([21212,10101,12121], 1000000)) // => 1

