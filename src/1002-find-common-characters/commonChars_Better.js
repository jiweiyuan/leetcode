// https://leetcode.com/problems/find-common-characters/ better solution

function commonChars(A) {
    let minCharsArray = A[0].split('')
    let charsArray = []
    for (const str of A) {
        if (str.length < minCharsArray.length) minCharsArray = str.split('')
        charsArray.push(str.split(''))
    }

    for (let i = 0;  i < charsArray.length; i++) {
        minCharsArray = minCharsArray.filter(char => {
            let index = charsArray[i].indexOf(char)
            if (index < 0) return false
            charsArray[i].splice(index, 1)
            return true
        })

    }

    return minCharsArray
}

console.log(commonChars(["bella","label","roller"])) // => ['e', 'l', 'l']
