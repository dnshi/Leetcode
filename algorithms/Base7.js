// Source : https://leetcode.com/problems/base-7
// Author : Dean Shi
// Date   : 2017-02-27

/***************************************************************************************
 *
 * Given an integer, return its base 7 string representation.
 *
 * Example 1:
 *
 * Input: 100
 * Output: "202"
 *
 * Example 2:
 *
 * Input: -7
 * Output: "-10"
 *
 * Note:
 * The input will be in range of [-1e7, 1e7].
 *
 *
 ***************************************************************************************/

/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    return num.toString(7)
};
