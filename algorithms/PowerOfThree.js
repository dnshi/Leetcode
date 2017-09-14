// Source : https://leetcode.com/problems/power-of-three
// Author : Dean Shi
// Date   : 2017-09-14

/***************************************************************************************
 *
 * Given an integer, write a function to determine if it is a power of three.
 *
 *     Follow up:
 *     Could you do it without using any loop / recursion?
 *
 * Credits:Special thanks to @dietpepsi for adding this problem and creating all test
 * cases.
 *
 ***************************************************************************************/

/**
 * Recursion
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n === 1) return true
    if (n % 3 !== 0 || n === 0) return false

    return isPowerOfThree(n / 3)
};

/**
 * Iteration
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n < 1) return false
    while (n % 3 === 0) n /= 3

    return n === 1
};
