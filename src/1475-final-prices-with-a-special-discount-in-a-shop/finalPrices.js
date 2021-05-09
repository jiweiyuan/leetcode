// https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/

function finalPrices(prices) {
    let result = []

    for (let i = 0; i < prices.length; i++) {
        let discount = 0
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] <= prices[i]) {
                discount = prices[j]
                break
            }
        }
        result.push(prices[i] - discount)
    }

    return result
}

console.log(finalPrices([8,4,6,2,3])) // => [4,2,4,2,3]
