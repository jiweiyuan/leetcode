// https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/

function reverseParentheses(s) {
    let stack = []

    let str = ''
    for (const char of s) {
        if (char === '(') {
            stack.push(str)
            str = ''
        } else if (char === ')') {
            str = str.split('').reverse().join('')
            str = stack.pop() + str
        } else {
            str += char
        }
    }

    return str
}


console.log(reverseParentheses("(abcd)"))
console.log(reverseParentheses("(ed(et(oc))el)"))
