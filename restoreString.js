// https://leetcode.com/problems/shuffle-string/

function restoreString(s, indices) {
    let result = []

    for (let i = 0, len = s.length; i < len; i++) {
        result[indices[i]] = s[i]
    }

    return result.join('')
}
