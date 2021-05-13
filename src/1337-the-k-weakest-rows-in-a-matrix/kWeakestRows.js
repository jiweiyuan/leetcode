// https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/

function kWeakestRows(mat, k) {
    let result = []

    let weak = mat.map(row => row.filter(item => item ===1).length)

    let originWeak = [...weak]
    let sortedWeak = weak.sort((a, b) => a - b)
    for (let i = 0; i < k; i++) {
        let index = originWeak.indexOf(sortedWeak[i])
        result.push(index)
        originWeak[index] = null
    }

    return result

}

console.log(kWeakestRows([[1,0,0,0], [1,1,1,1], [1,0,0,0], [1,0,0,0]], 2))
