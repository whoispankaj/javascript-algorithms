/*
Say you have an array for which the i-th element is the price of a given
stock on day i.If you were only permitted to complete at most one transaction 
i.e(buy one and sell one share of the stock), design an algorithm to find the
maximum profilt
Eg:

Input: [7,1,5,3,6,4]
Output: 5

Input: [7,6,4,3,1]
Output: 0
In this case there is no transacation done.so max-profilt will be 0
*/
//Time Complexity O(n), Space Complexity O(1)
function buyAndSellOnce(costs) {
  let minCostIdx = 0;
  let maxProfit = 0;
  for (let i = 1; i < costs.length; i++) {
    let profit = costs[i] - costs[minCostIdx];
    if (profit > maxProfit) {
      maxProfit = profit;
    }
    if (costs[i] < costs[minCostIdx]) {
      minCostIdx = i;
    }
  }
  return maxProfit;
}
module.exports = buyAndSellOnce;
