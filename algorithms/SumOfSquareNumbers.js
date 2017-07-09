// Source : https://leetcode.com/problems/sum-of-square-numbers
// Author : Dean Shi
// Date   : 2017-07-09

/***************************************************************************************
 *
 * Given a non-negative integer c, your task is to decide whether there're two integers
 * a and b such that a2 + b2 = c.
 *
 * Example 1:
 *
 * Input: 5
 * Output: True
 * Explanation: 1 * 1 + 2 * 2 = 5
 *
 * Example 2:
 *
 * Input: 3
 * Output: False
 *
 *
 ***************************************************************************************/

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    const limit = Math.sqrt(c)

    for (let i = 0; i <= limit; i++) {
        if (Number.isInteger(Math.sqrt(c - i ** 2))) return true
    }
    return false
};
