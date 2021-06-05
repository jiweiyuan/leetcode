// https://leetcode.com/problems/peak-index-in-a-mountain-array/

function peakIndexInMountainArray(arr) {
    let l = 1;
    let r = arr.length - 1


    while (l < r) {
        let m = l + Math.floor((r - l)/2)

        if (arr[m] > arr[m-1] && arr[m] > arr[m+1]) return m

        if (arr[m] < arr[m-1] && arr[m + 1] < arr[m]) {
            r = m
        } else {
            l = m + 1
        }
    }

    return l
}


console.log(peakIndexInMountainArray([3,4,5,1])) // => 2
console.log(peakIndexInMountainArray([0,10,5,2])) // => 1
console.log(peakIndexInMountainArray([0,1, 0])) // => 1
