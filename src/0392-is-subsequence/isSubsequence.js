// https://leetcode.com/problems/is-subsequence/

function isSubsequence(s, t) {
    let i = 0
    let len = t.length
    for (const char of s) {
        while (t[i] !== char) {
            if(i === len) return false
            i++
        }
        i++
    }

    return true
}


console.log(isSubsequence(s = "abc", t = "ahbgdc")) // => true
console.log(isSubsequence(s = "axc", t = "ahbgdc")) // => false

