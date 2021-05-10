// https://leetcode.com/problems/self-dividing-numbers/

function selfDividingNumbers(left, right) {
    let result  = []

    for (let i = left; i <= right; i++) {
        if (isSelfDividingNumber(i)) {
            result.push(i)
        }
    }

    return result
}

function isSelfDividingNumber(num) {

    if (num > 0 && num < 10) return true

    let numString = '' + num
    let numCharArray = numString.split('')

    for (let i = 0; i <numCharArray.length; i++) {
        if (parseInt(numCharArray[i]) === 0) return  false
        if (num % numCharArray[i] !== 0) return false
    }

    return true

}

console.log(isSelfDividingNumber(11))

console.log(selfDividingNumbers(1, 22))