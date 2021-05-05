// https://leetcode.com/problems/delete-and-earn/

function deleteAndEarn(nums) {
    let min = 10 ** 9
    let max = 0
    let sums = new Map()

    for (let num of nums) {
        min = Math.min(min, num)
        max = Math.max(max, num)
        sums.set(num, (sums.get(num) || 0) + num)
    }
    if (sums.size === 1) return sums.get(min)
    
    let pre = sums.get(min)
    let cur = Math.max(sums.get(min + 1) || 0, pre)
    for (let i = min + 2; i <= max; i++) {
        [cur, pre] = [Math.max(pre + (sums.get(i) || 0), cur), cur]
    }
    
    return cur
}


console.log(deleteAndEarn([3, 4, 2]))
console.log(deleteAndEarn([2,2,3,3,3,4]))