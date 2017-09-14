// Source : https://leetcode.com/problems/power-of-four
// Author : Dean Shi
// Date   : 2017-09-14

/***************************************************************************************
 *
 * Given an integer (signed 32 bits), write a function to check whether it is a power
 * of 4.
 *
 * Example:
 * Given num = 16, return true.
 * Given num = 5, return false.
 *
 * Follow up: Could you solve it without loops/recursion?
 *
 * Credits:Special thanks to @yukuairoy  for adding this problem and creating all test
 * cases.
 *
 ***************************************************************************************/

/**
 * Recursion
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if (num === 1) return true
    if (num % 4 !== 0 || num === 0) return false

    return isPowerOfFour(num / 4)
};

/**
 * Iteration
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if (num < 1) return false
    while (num % 4 === 0) num /= 4

    return num === 1
};
