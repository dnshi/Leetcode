// Source : https://leetcode.com/problems/climbing-stairs
// Author : Dean Shi
// Date   : 2017-07-10

/***************************************************************************************
 *
 * You are climbing a stair case. It takes n steps to reach to the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb
 * to the top?
 *
 * Note: Given n will be a positive integer.
 *
 *
 ***************************************************************************************/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let [curr, next] = [1, 2]

    while (--n) {
        [curr, next] = [next, curr + next]
    }

    return curr
};


/**
 * Solution in DP
 *
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = [0, 1, 2]
    for(let i = 3; i <= n; ++i) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
};
