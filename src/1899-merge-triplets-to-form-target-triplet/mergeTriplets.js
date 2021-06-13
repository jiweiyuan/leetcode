// https://leetcode.com/problems/merge-triplets-to-form-target-triplet/

var mergeTriplets = function(triplets, target) {
    const [x, y, z] = target

    let filted = triplets.filter(item => {
        return item[0] <= x && item[1] <= y && item[2] <= z
    })

    let [max1, max2, max3] = [0, 0, 0]
    for (const item of filted) {
        max1 = Math.max(max1, item[0])
        max2 = Math.max(max2, item[1])
        max3 = Math.max(max3, item[2])
    }

    return filted.length > 0 && max1 === x && max2 === y && max3 === z

};


console.log(mergeTriplets([2,5,3],[[2,3,4],[1,2,5],[5,2,3]], [5,5,5]))
console.log(mergeTriplets( triplets = [[2,5,3],[2,3,4],[1,2,5],[5,2,3]], target = [5,5,5]))
