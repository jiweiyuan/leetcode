// https://leetcode.com/problems/maximum-69-number/

function maximum69Number(num) {

    let numString = num + ''
    let numDigitArray = numString.split('')

    for (let i = 0; i < numDigitArray.length; i++) {
        if (numDigitArray[i] === '6') {
            numDigitArray[i] = '9'
            break
        }
    }

    return parseInt(numDigitArray.join(''))
}

console.log(maximum69Number(9669)) // => 9969