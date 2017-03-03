// Source : https://leetcode.com/problems/maximum-subarray
// Author : Dean Shi
// Date   : 2017-03-02

/***************************************************************************************
 *
 * Find the contiguous subarray within an array (containing at least one number) which
 * has the largest sum.
 *
 * For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
 * the contiguous subarray [4,-1,2,1] has the largest sum = 6.
 *
 * click to show more practice.
 *
 * More practice:
 *
 * If you have figured out the O(n) solution, try coding another solution using the
 * divide and conquer approach, which is more subtle.
 *
 *
 ***************************************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!nums.length) return -Infinity

    const dp = [nums[0]]
    let largestSum = nums[0]

    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
        largestSum = Math.max(largestSum, dp[i])
    }
    return largestSum
};
