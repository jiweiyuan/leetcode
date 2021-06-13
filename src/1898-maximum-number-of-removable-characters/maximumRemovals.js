// https://leetcode.com/problems/maximum-number-of-removable-characters/
function maximumRemovals(s, p, removable) {
    let l = 0
    let r = removable.length + 1

    while (l < r) {
        let mid = l + Math.floor((r - l) / 2)

        let x = s.split('')
        for (let i = 0; i < mid; i++) {
            x[removable[i]] = ''
        }

        if (!isSubsequence(x.join(''), p)) {
            r = mid
        } else {
            l = mid + 1
        }
    }

    return Math.max(l - 1)
};

function isSubsequence (s, p) { // p is subsequence of s
    if(p === '') return true;

    if (p.length > s.length) return false

    let pIndex = 0
    for(let i = 0; i < s.length; i++) {
       if (s[i] === p[pIndex]) {
           pIndex++
           if (pIndex === p.length) return true
       }
    }
    console.log(pIndex)
    return pIndex === p.length
};



// console.log(maximumRemovals("abcacb", "ab", [3,1,0]))
//console.log(maximumRemovals("abcab", "abc", [0,1,2,3,4]))
console.log(maximumRemovals("qlevcvgzfpryiqlwy","qlecfqlw", [12,5]))
