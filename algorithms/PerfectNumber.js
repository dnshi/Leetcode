// Source : https://leetcode.com/problems/perfect-number
// Author : Dean Shi
// Date   : 2017-03-30

/***************************************************************************************
 *
 * We define the Perfect Number is a positive integer that is equal to the sum of all
 * its positive divisors except itself.
 *
 * Now, given an integer n, write a function that returns true when it is a perfect
 * number and false when it is not.
 *
 * Example:
 *
 * Input: 28
 * Output: True
 * Explanation: 28 = 1 + 2 + 4 + 7 + 14
 *
 * Note:
 * The input number n will not exceed 100,000,000. (1e8)
 *
 *
 ***************************************************************************************/

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num === 1) return false

    let sum = 1
    const length = Math.floor(Math.sqrt(num))

    for (let i = 2; i <= length; i++) {
        if (num % i === 0) {
            sum += num / i + i
        }
    }
    return sum === num
};
