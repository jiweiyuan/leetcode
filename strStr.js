//
// 0028

function strStr(haystack, needle) {
    if(needle === '') return 0

    let i = 0

    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        let counter = 0

        while (needle[counter] === haystack[i+counter]  ) {
            if(counter === needle.length -1) return i
            counter++
        }
    }

    return -1
}

console.log(strStr('hello', 'll'))
