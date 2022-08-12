// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

/**
 * @param {number[]} prices
 * @return {number}
 */

 var maxProfit = function(prices) {
    let max_profit = 0;
    let lowest_val = prices[0];
    
    // Traverse array once. Brute force method led to timeout errors!
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < lowest_val) {
            lowest_val = prices[i];
        }
         
        if (prices[i] - lowest_val > max_profit) {
            max_profit = prices[i] - lowest_val;
        }
    }
    
    if (max_profit > 0) {
        return max_profit;
    }
    
    return 0;
    
    // Time complexity = O(N);
    // Space complexity = O(1);
};

// Runtime: 106 ms, faster than 73.83% of JavaScript online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 51.8 MB, less than 54.07% of JavaScript online submissions for Best Time to Buy and Sell Stock.