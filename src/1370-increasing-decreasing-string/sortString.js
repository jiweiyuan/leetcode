// https://leetcode.com/problems/increasing-decreasing-string/

function sortString(s) {
    let arr = s.split('').sort((a, b) => a.localeCompare(b))
    let result = []

    while (arr.length) {
        result = result.concat(left2Right(arr))
        result = result.concat(right2Left(arr))
    }

    return result.join('')
}

function left2Right(arr) {
    let result = []

    let prev = null
    for (let i = 0; i<arr.length; i++) {
        if (arr[i] && arr[i] !== prev) {
            prev = arr[i]
            result.push(prev)
            arr.splice(i, 1)
            i--
        }
    }

    return result
}

function right2Left(arr) {
    let result = []

    let prev = null
    for (let i = arr.length - 1; i >= 0; i--) {
        if (!prev || arr[i] !== prev) {
            prev = arr[i]
            result.push(prev)
            arr.splice(i, 1)
        }
    }
    return result
}

console.log(left2Right(['a', 'b', 'c', 'c']))
console.log(right2Left(['a', 'a', 'b', 'c']))
console.log(sortString("aaaabbbbcccc"))
