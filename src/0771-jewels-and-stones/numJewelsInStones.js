// https://leetcode.com/problems/jewels-and-stones/

function numJewelsInStones(jewels, stones) {
    let set = new Set()

    for (const s of jewels) {
        set.add(s)
    }

    let ans = 0

    for (const s of stones) {
        if (set.has(s)) {
            ans++
        }
    }

    return ans
}
