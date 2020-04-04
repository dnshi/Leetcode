// Source : https://leetcode.com/problems/happy-number/
// Author : Dean Shi
// Date   : 2015-06-16

/**********************************************************************************
 *
 * Write an algorithm to determine if a number is "happy".
 *
 * A happy number is a number defined by the following process: Starting with any positive integer,
 * replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1
 * (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this
 * process ends in 1 are happy numbers.
 *
 * Example: 19 is a happy number
 *
 * 12 + 92 = 82
 * 82 + 22 = 68
 * 62 + 82 = 100
 * 12 + 02 + 02 = 1
 *
 * Credits:Special thanks to @mithmatt and @ts for adding this problem and creating all test cases.
 *
 **********************************************************************************/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if (n / 10 < 1) return n === 7 || n === 1
    
    let sum = 0
    do {
        sum += Math.pow(n % 10, 2)
    } while(n = Math.floor(n / 10))
    
    return isHappy(sum)
};

