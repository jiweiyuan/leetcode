// https://leetcode.com/problems/find-the-distance-value-between-two-arrays/

function findTheDistanceValue(arr1, arr2, d) {
    let result = 0

    outer:
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (Math.abs(arr1[i] - arr2[j]) <= d) continue outer
        }
        result++
    }

    return result
}

console.log(findTheDistanceValue([2,1,100,3], [-5,-2,10,-3,7], 6))
