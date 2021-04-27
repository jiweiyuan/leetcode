// https://leetcode.com/problems/best-time-to-buy-and-sell-stock

function maxProfit(prices) {
    let profit = 0
    if (prices.length === 1) return profit

    // dp[i] max profit of the i length prices
    // min: min value of the i length prices
    // dp[i] = max(dp[i-1], prices[i] - min)

    let min = prices[0]
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] <= min) {
            min = prices[i]
        } else {
            profit = Math.max(profit, prices[i] - min)
        }
    }

    return profit
}

console.log(maxProfit([1, 2]))