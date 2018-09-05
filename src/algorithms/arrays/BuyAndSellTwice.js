/*
Write a program that computes the maximum profit that can be made by buying and selling
a share at most twice.The second buy must be made on another date after the first sale
*/
//Space Complexity O(n) and time Complexity O(n)
function buyAndSellTwice(prices) {
  let maxProfit = 0;
  let minPrice = Number.MAX_VALUE;
  let profits = [];
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    profits[i] = maxProfit;
  }
  let maxPrice = Number.MIN_VALUE;
  for (let i = prices.length - 1; i > 0; i--) {
    maxPrice = Math.max(maxPrice, prices[i]);
    maxProfit = Math.max(maxProfit, profits[i - 1] + maxPrice - prices[i]);
  }
  return maxProfit;
}
module.exports = buyAndSellTwice;
