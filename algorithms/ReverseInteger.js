// Source : https://oj.leetcode.com/problems/reverse-integer/
// Author : Dean Shi
// Date   : 2015-06-03

/**********************************************************************************
 *
 * Reverse digits of an integer.
 *
 * Example1: x =  123, return  321
 * Example2: x = -123, return -321
 *
 *
 * Have you thought about this?
 *
 * Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!
 *
 * > If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.
 *
 * > Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer,
 *   then the reverse of 1000000003 overflows. How should you handle such cases?
 *
 * > Throw an exception? Good, but what if throwing an exception is not an option?
 *   You would then have to re-design the function (ie, add an extra parameter).
 *
 *
 **********************************************************************************/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0
    while(x) {
        result = result * 10 + x % 10 
        x = ~~(x / 10)
    }
    if (result > 2147483648 || result < -2147483649) result = 0
    
    return result
};

// Test cases
console.log(reverse(1563847412) === 0); // true
console.log(reverse(-2147483648) === 0); // true
console.log(reverse(32768) === 86723); // true
