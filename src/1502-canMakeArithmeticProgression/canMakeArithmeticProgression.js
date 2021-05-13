//  https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/

function canMakeArithmeticProgression(arr) {
    arr.sort((a, b) => a - b)

    let diff = arr[1] - arr[0]

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i- 1] !== diff) return false
    }
    return true
}
