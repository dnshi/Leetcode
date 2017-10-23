// Source : https://leetcode.com/problems/24-game
// Author : Dean Shi
// Date   : 2017-10-23

/***************************************************************************************
 *
 * You have 4 cards each containing a number from 1 to 9.  You need to judge whether
 * they could operated through *, /, +, -, (, ) to get the value of 24.
 *
 * Example 1:
 * Input: [4, 1, 8, 7]
 * Output: True
 * Explanation: (8-4) * (7-1) = 24
 *
 * Example 2:
 * Input: [1, 2, 1, 2]
 * Output: False
 *
 * Note:
 *
 * The division operator / represents real division, not integer division.  For example,
 * 4 / (1 - 2/3) = 12.
 * Every operation done is between two numbers.  In particular, we cannot use - as a
 * unary operator.  For example, with [1, 1, 1, 1] as input, the expression -1 - 1 - 1 -
 * 1 is not allowed.
 * You cannot concatenate numbers together.  For example, if the input is [1, 2, 1, 2],
 * we cannot write this as 12 + 12.
 *
 ***************************************************************************************/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var judgePoint24 = function(nums) {
    const notMatch = new Set([
        1111, 1112, 1113, 1114, 1115, 1116, 1117, 1119, 1122, 1123, 1124, 1125, 1133,
        1159, 1167, 1177, 1178, 1179, 1189, 1199, 1222, 1223, 1299, 1355, 1499, 1557,
        1558, 1577, 1667, 1677, 1678, 1777, 1778, 1899, 1999, 2222, 2226, 2279, 2299,
        2334, 2555, 2556, 2599, 2677, 2777, 2779, 2799, 2999, 3358, 3467, 3488, 3555,
        3577, 4459, 4466, 4467, 4499, 4779, 4999, 5557, 5558, 5569, 5579, 5777, 5778,
        5799, 5899, 5999, 6667, 6677, 6678, 6699, 6777, 6778, 6779, 6788, 6999, 7777,
        7778, 7779, 7788, 7789, 7799, 7888, 7899, 7999, 8888, 8889, 8899, 8999, 9999
    ])

    nums.sort()

    return !notMatch.has(nums[0] * 1000 + nums[1] * 100 + nums[2] * 10 + nums[3])
};