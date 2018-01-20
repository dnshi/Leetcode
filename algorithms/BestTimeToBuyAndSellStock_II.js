// Source : https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii
// Author : Dean Shi
// Date   : 2018-01-20

/***************************************************************************************
 *
 * Say you have an array for which the ith element is the price of a given stock on day
 * i.
 *
 * Design an algorithm to find the maximum profit. You may complete as many
 * transactions as you like (ie, buy one and sell one share of the stock multiple times)
 * . However, you may not engage in multiple transactions at the same time (ie, you
 * must sell the stock before you buy again).
 *
 ***************************************************************************************/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let sum = 0

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) sum += prices[i] - prices[i - 1]
    }

    return sum
};
