// https://leetcode.com/problems/maximum-value-after-insertion/

var maxValue = function(n, x) {
    let isNegative = n[0] === "-"

    let nums = isNegative ? n.slice(1).split("")
        : n.split("")

    for (let i = 0; i < nums.length; i++) {
        if (isNegative) {
            if (x < (nums[i] || 0)) {
                nums.splice(i, 0, String(x))
                break
            }
        } else {
            if (x > (nums[i] || 0)) {
                nums.splice(i, 0, String(x))
                break
            }
        }

    }

    if (nums.length === (isNegative ? n.length- 1: n.length)) nums.push(String(x))

    return isNegative ? -parseInt(nums.join("")) : parseInt(nums.join(""))

};

console.log(maxValue("99", 9))
