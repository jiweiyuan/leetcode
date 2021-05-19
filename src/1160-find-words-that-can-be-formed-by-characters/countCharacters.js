// https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/

function countCharacters(words, chars) {
    let charsMap = countStringChars(chars)

    let result = 0
    for (const word of words) {
        if (canForm(countStringChars(word), charsMap)) {
            result += word.length
        }
    }
    return result
}

function countStringChars(s) {
    let map = new Map()
    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1)
    }

    return map
}

function canForm(map1, map2) {
    for (const [key, value] of map1.entries()) {
        if (value > (map2.get(key) || 0)) return false
    }
    return true
}

console.log(countCharacters(["cat","bt","hat","tree"], "atach"))
console.log(countCharacters(["hello","world","leetcode"],"welldonehoneyr"))
