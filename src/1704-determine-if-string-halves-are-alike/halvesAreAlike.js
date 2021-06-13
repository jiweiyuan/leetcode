// https://leetcode.com/problems/determine-if-string-halves-are-alike/

function halvesAreAlike(s) {
    const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])

    let i = 0, j = s.length - 1
    let left = 0, right = 0
    while (i < j) {
        if (set.has(s[i])) left++
        if (set.has(s[j])) right++
        i++
        j--
    }

    return left === right
}


console.log(halvesAreAlike("AbCdEfGh"))
