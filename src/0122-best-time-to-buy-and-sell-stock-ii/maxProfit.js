// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
/**
 * if next day's price up, i will buy or hold
 * if next day's price down i will sell or don't buy
 * @param prices
 */

function maxProfit(prices) {
    if (prices.length === 1) return 0

    let profit = 0
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i + 1] > prices[i]) {
            profit = profit + prices[i+1] - prices[i]
        }
    }

    return profit
}