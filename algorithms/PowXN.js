// Source : https://leetcode.com/problems/powx-n
// Author : Dean Shi
// Date   : 2017-07-10

/***************************************************************************************
 *
 * Implement pow(x, n).
 *
 ***************************************************************************************/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (x === 1 || n === 0) return 1
    if (x === x + 1) return 0

    if (n < 0) {
        n = -n
        x = 1 / x
    }
    return n & 1 ? x * myPow(x * x, n >> 1) : myPow(x * x, n >> 1)
};
