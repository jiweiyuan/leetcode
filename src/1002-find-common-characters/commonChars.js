// https://leetcode.com/problems/find-common-characters/

function commonChars(A) {
    let result = []
    let minStringMap = new Map()

    let minString = A[0]
    let charsArray = []
    for (const str of A) {
        if (str.length < minString.length) minString = str
        charsArray.push(str.split(''))
    }

    for (let i = 0;  i< minString.length; i++) {
        let flag = true
        let targetChar = minString[i]
        minStringMap.set(targetChar, (minStringMap.get(targetChar) || 0) + 1)

        for (let j = 0; j < charsArray.length; j++) {
            if (charsArray[j].filter(char => char === targetChar).length < minStringMap.get(targetChar)) {
                flag = false
                break
            }
        }

        if(flag) result.push(targetChar)
    }

    return result
}

console.log(commonChars(["bella","label","roller"])) // => ['e', 'l', 'l']
