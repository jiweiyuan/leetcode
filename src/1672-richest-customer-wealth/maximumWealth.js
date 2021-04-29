// https://leetcode.com/problems/richest-customer-wealth/

function maximumWealth(accounts) {
    let result = sumOfArray(accounts[0])

    for (let i = 1; i < accounts.length; i++) {
        result = Math.max(result, sumOfArray(accounts[i]))
    }

    return result
}

function sumOfArray(numbers = []) {
    return numbers.reduce((sum, num) => {
        return sum + num
    }, 0)
}

console.log(maximumWealth([[1, 2, 3], [2, 3, 4]]))
