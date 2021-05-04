function twoSum (nums, target) {
    let map = new Map()

    for (let j = 0; j < nums.length; j++) {
        if(map.get(target - nums[j])) {
            return [map.get(target - nums[j]), j]
        } else {
            map.set(nums[j], j)
        }

    }
}