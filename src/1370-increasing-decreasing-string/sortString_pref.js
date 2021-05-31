// https://leetcode.com/problems/increasing-decreasing-string/

function sortString(s) {
    let chars = new Array(26).fill(0)

    for (const c of s) {
        chars[c.charCodeAt(0) - 97]++
    }
    let res = ''

    while (res.length < s.length) {
        for (let i = 0; i < 26; i++) {
            if (chars[i]) {
                res+= String.fromCharCode(i + 97)
                chars[i]--
            }
        }

        for (let j = 26 - 1; j  >= 0; j--) {
            if (chars[j]) {
                res += String.fromCharCode(j + 97)
                chars[j]--
            }
        }
    }

    return res
}

console.log(sortString('aaaabbbbccccdddd'))
