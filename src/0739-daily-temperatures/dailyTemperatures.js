// https://leetcode.com/problems/daily-temperatures/

function dailyTemperatures(temperatures) {

    let stack = []

    let res = temperatures.map(_ => 0)

    for (let i = 0; i < temperatures.length; i++) {
        while(stack.length !== 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let idx = stack.pop()
            res[idx] = i - idx
        }
        stack.push(i)
    }

    return res
}

console.log(dailyTemperatures([73,74,75,71,69,72,76,73])) // => [1,1,4,2,1,1,0,0]
