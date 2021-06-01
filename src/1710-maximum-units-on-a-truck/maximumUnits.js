// https://leetcode.com/problems/maximum-units-on-a-truck/

function maximumUnits(boxTypes, truckSize) {
    let boxes = [...boxTypes]

    boxes.sort((a, b) => b[1] - a[1])

    let result = 0
    while (truckSize > 0 && boxes.length) {
        let box = boxes.shift()
        let max  = Math.min(truckSize, box[0])
        result += max * box[1]
        truckSize -= max
    }

    return result
}

console.log(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10))
