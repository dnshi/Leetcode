// Source : https://leetcode.com/problems/number-of-1-bits/
// Author : Dean Shi
// Date   : 2015-06-16

/**********************************************************************************
 *
 * Write a function that takes an unsigned integer and returns the number of ’1' bits it has
 * (also known as the Hamming weight).
 *
 * For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011,
 * so the function should return 3.
 *
 * Credits:Special thanks to @ts for adding this problem and creating all test cases.
 *
 **********************************************************************************/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let result = 0
    do {
        result += n & 1
    } while (n >>>= 1)
    return result
};
