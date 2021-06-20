// https://leetcode.com/problems/largest-odd-number-in-string/

var largestOddNumber = function(num) {
    const len = num.length
    let ans = ''
    for (let i = len- 1; i >= 0; i--) {
        let n = Number(num[i])
        if (n % 2 === 1) {
            // odd
            ans = n + ans
        } else {
            // even
            if (ans !== '') {
                ans = n + ans
            }
        }
    }

    return ans
}

console.log(largestOddNumber('52'))
console.log(largestOddNumber("239537672423884969653287101"))
