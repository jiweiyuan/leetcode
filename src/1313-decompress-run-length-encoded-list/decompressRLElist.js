// https://leetcode.com/problems/decompress-run-length-encoded-list/

function decompressRLElist(nums) {
    const result = []

    for (let i = 0; i < nums.length; i+=2) {
        for (let j = 0; j < nums[i]; j++) {
            result.push(nums[i+1])
        }
    }

    return result
}

console.log(decompressRLElist([1, 2, 3, 4]))
