// https://leetcode.com/problems/check-array-formation-through-concatenation/

function canFormArray(arr, pieces) {
    let map = new Map()

    for (const piece of pieces) {
        map.set(piece[0], piece)
    }


    for (let i = 0; i < arr.length; i++) {
        const val = arr[i]
        const piece = map.get(val)
        if (!piece)  return false


        for (let j = 0; j < piece.length; j++, i++) {
            if (arr[i] !== piece[j]) return false
        }
        i--
    }

    return true
}

console.log(canFormArray(arr = [15,88], pieces = [[88],[15]]))
console.log(canFormArray([91,4,64,78],[[78],[4,64],[91]]))
console.log(canFormArray([37,69,3,74,46],[[37,69,3,74,46]]))
