// Source : https://oj.leetcode.com/problems/integer-to-roman/
// Author : Dean Shi
// Date   : 2015-06-10

/**********************************************************************************
 *
 * Given an integer, convert it to a roman numeral.
 *
 * Input is guaranteed to be within the range from 1 to 3999.
 *
 **********************************************************************************/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var numArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanArr = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var result = '';

    for (var i = 0; num !== 0; ++i) {
        while (num >= numArr[i]) {
            num -= numArr[i];
            result += romanArr[i];
        }
    }
    return result;
};

// Test case
console.log(intToRoman(999) === 'CMXCIX'); // true
