// Source : https://oj.leetcode.com/problems/plus-one/
// Author : Dean Shi
// Date   : 2015-06-16

/**********************************************************************************
 *
 * Given a non-negative number represented as an array of digits, plus one to the number.
 *
 * The digits are stored such that the most significant digit is at the head of the list.
 *
 **********************************************************************************/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var i = digits.length - 1;
    while (i >= 0) {
        if (++digits[i] < 10) {
            return digits;
        }
        digits[i--] = 0;
    }
    digits.unshift(1);
    return digits;
};

// Test cases
console.log(plusOne([9]).toString() === '1,0'); // true
console.log(plusOne([1, 0]).toString() === '1,1'); // true
console.log(plusOne([1, 2, 3]).toString() === '1,2,4'); // true
