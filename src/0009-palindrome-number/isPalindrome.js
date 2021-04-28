// https://leetcode.com/problems/palindrome-number/

function isPalindrome(x) {
    if (x < 0) return false
    if (x > 0 && x < 10) return true

    let y = parseInt(String(x).split('').reverse().join(''))
    return x === y
}

console.log(isPalindrome(6))
console.log(isPalindrome(-1))
console.log(isPalindrome(1234321))
console.log(isPalindrome(10))