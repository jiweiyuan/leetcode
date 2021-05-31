// https://leetcode.com/problems/sorting-the-sentence/

function sortSentence(s) {
    let arr = s.split(' ').sort((a, b) => {
        return parseInt(a[a.length - 1]) - parseInt(b[b.length - 1])
    })

    return arr.map(word => word.slice(0, -1)).join(' ')
}


console.log(sortSentence("is2 sentence4 This1 a3"))
