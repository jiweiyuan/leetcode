// https://leetcode.com/problems/first-bad-version/
let bad = 1
function firstBad(n) {
    let l = 1;
    let r = n + 1

    while (l < r) {
        let m = l + Math.floor((r - l) / 2)

        if (isBadVersion(m)) {
            r = m
        } else {
            l = m + 1
        }
    }
    return l
}

function isBadVersion(n) {
    return  n === bad
}

bad = 10
console.log(firstBad(10))
