// Source : https://leetcode.com/problems/coin-change
// Author : Dean Shi
// Date   : 2017-07-15

/***************************************************************************************
 *
 * You are given coins of different denominations and a total amount of money amount.
 * Write a function to compute the fewest number of coins that you need to make up that
 * amount. If that amount of money cannot be made up by any combination of the coins,
 * return -1.
 *
 * Example 1:
 * coins = [1, 2, 5], amount = 11
 * return 3 (11 = 5 + 5 + 1)
 *
 * Example 2:
 * coins = [2], amount = 3
 * return -1.
 *
 * Note:
 * You may assume that you have an infinite number of each kind of coin.
 *
 * Credits:Special thanks to @jianchao.li.fighter for adding this problem and creating
 * all test cases.
 *
 *
 ***************************************************************************************/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = Array(amount + 1).fill(amount + 1)

    dp[0] = 0
    for (let i of coins) {
        for (let j = i; j <= amount; ++j) {
            dp[j] = Math.min(dp[j], dp[j - i] + 1)
        }
    }

    return dp[amount] > amount ? -1 : dp[amount]
};
