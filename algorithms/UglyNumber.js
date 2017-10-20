// Source : https://leetcode.com/problems/ugly-number
// Author : Dean Shi
// Date   : 2017-10-20

/***************************************************************************************
 *
 * Write a program to check whether a given number is an ugly number.
 *
 * Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For
 * example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.
 *
 * Note that 1 is typically treated as an ugly number.
 *
 * Credits:Special thanks to @jianchao.li.fighter for adding this problem and creating
 * all test cases.
 *
 ***************************************************************************************/

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    for (const p of [2, 3, 5]) {
        while (num && num % p === 0) num /= p
    }
    return num === 1
};
