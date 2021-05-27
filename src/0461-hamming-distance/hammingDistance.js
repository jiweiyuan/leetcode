// https://leetcode.com/problems/hamming-distance/

function hammingDistance(x, y) {
    let xBin = num2binaryStr(x)
    let yBin = num2binaryStr(y)

    xBin = padStart(xBin, '0', 32)
    yBin = padStart(yBin, '0', 32)
    let result = 0
    let length = Math.max(xBin.length, yBin.length)
    for (let i = 0; i < length; i++) {
        if (xBin[xBin.length - 1 - i] !== yBin[yBin.length - 1 - i]) {
            result++
        }
    }

    return result
}

function num2binaryStr(num) {
    let result = ''

    while (num > 1) {
        result =String(num % 2) + result
        num = Math.floor(num / 2)
    }
    result = num + result

    return result
}

function padStart(str, char, length) {
    while (str.length < length) {
        str = char + str
    }

    return str
}
// console.log(hammingDistance(1, 4))
// console.log(hammingDistance(3, 1))
// console.log(hammingDistance(4, 14))
