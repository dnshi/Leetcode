// Source : https://leetcode.com/problems/reverse-bits/
// Author : Dean Shi
// Date   : 2015-06-16

/**********************************************************************************
 *
 * Reverse bits of a given 32 bits unsigned integer.
 *
 * For example, given input 43261596 (represented in binary as 00000010100101000001111010011100),
 * return 964176192 (represented in binary as 00111001011110000010100101000000).
 *
 * Follow up:
 * If this function is called many times, how would you optimize it?
 *
 * Related problem: Reverse Integer
 *
 * Credits:Special thanks to @ts for adding this problem and creating all test cases.
 *
 **********************************************************************************/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var bits = n.toString(2).split('').reverse();
    var l = bits.length;
    while (32 - l > 0) {
        bits.push('0');
        ++l;
    }
    return parseInt(bits.join(''), 2);
};

// Test case
console.log(reverseBits(43261596) === 964176192); // true
