// https://leetcode.com/problems/move-zeroes/

function moveZeroes(nums) {
  if (!nums || nums.length === 0) return

  let insertPosition = 0

  for (const num of nums) {
    if (num !== 0) {
      nums[insertPosition++] = num
    }
  }

  while(insertPosition < nums.length) {
    nums[insertPosition++] = 0
  }

  return nums
}

console.log(moveZeros([0,1,0,3,12])) // => [1,3,12,0,0]