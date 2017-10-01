// Source : https://leetcode.com/problems/factorial-trailing-zeroes/
// Author : Dean Shi
// Date   : 2017-10-01

/***************************************************************************************
 *
 * Given an integer n, return the number of trailing zeroes in n!.
 *
 * Note: Your solution should be in logarithmic time complexity.
 *
 * Credits:Special thanks to @ts for adding this problem and creating all test cases.
 *
 ***************************************************************************************/

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    return n ? (n / 5 | 0) + trailingZeroes(n / 5 | 0) : 0
};
