// Source : https://leetcode.com/problems/sqrtx
// Author : Dean Shi
// Date   : 2017-07-10

/***************************************************************************************
 *
 * Implement int sqrt(int x).
 *
 * Compute and return the square root of x.
 *
 *
 ***************************************************************************************/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let r = x
    while (r * r > x) r = ((r + x / r) / 2) | 0
    return r
};
