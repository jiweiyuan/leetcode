// https://leetcode.com/problems/roman-to-integer/

function romanToInt(s) {
    const specialInstance = {
        IV: 'IIII',
        IX: 'VIIII',
        XL: 'XXXX',
        XC: 'LXXXX',
        CD: 'CCCC',
        CM: 'DCCCC'
    }

    const symbols = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    Object.keys(specialInstance).forEach(key => {
        s = s.replace(key, specialInstance[key])
    })

    let result = 0
    for(let i = 0; i < s.length; i++) {
        result += symbols[s[i]]
    }

    return result
}

console.log(romanToInt('III')) // => 3
console.log(romanToInt('IV')) // => 4
console.log(romanToInt('MCMXCIV')) // => 1994
