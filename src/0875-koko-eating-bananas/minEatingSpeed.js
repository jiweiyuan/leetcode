// https://leetcode.com/problems/koko-eating-bananas/

function minEatingSpeed(piles, h) {

    let l = 1
    let r = Math.max(...piles) + 1

    while (l < r) {
        let m = l + Math.floor((r - l) / 2)

        let sum = 0
        for (const pile of piles) {
            sum += Math.ceil(pile / m)
        }

        if (sum <= h) {
            r = m
        } else {
            l = m + 1
        }
    }

    return l
}

console.log(minEatingSpeed(piles = [30,11,23,4,20], h = 6))
