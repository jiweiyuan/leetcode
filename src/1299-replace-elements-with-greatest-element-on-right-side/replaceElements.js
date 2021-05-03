// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

function replaceElements(arr) {
    let result = [-1]
    if (arr.length >= 2) {
        result.unshift(arr[arr.length-1])
    }

    for (let i = arr.length - 3; i >= 0 ; i--) {
        result.unshift(Math.max(result[0], arr[i + 1]))
    }

    return result
}

console.log(replaceElements([17,18,5,4,6,1]))