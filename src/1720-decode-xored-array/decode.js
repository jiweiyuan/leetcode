// https://leetcode.com/problems/decode-xored-array/
// encoded[i] = result[i] ^ result[i + 1]
// result[i + 1] = encoded[i] ^ result[i]

function decode(encoded, first) {
  let result = [first]

  for (let i = 1; i < encoded.length + 1; i++) {
    result[i] = encoded[i - 1] ^ result[i - 1]
  }

  return result

}


console.log(decode([6,2,7,3], 4)) // => [4,2,0,7,4]