// Source : https://oj.leetcode.com/problems/excel-sheet-column-number/
// Author : Dean Shi
// Date   : 2015-06-18

/**********************************************************************************
 *
 * Related to question Excel Sheet Column Title
 * Given a column title as appear in an Excel sheet, return its corresponding column number.
 *
 * For example:
 *     A -> 1
 *     B -> 2
 *     C -> 3
 *     ...
 *     Z -> 26
 *     AA -> 27
 *     AB -> 28
 *
 * Credits:Special thanks to @ts for adding this problem and creating all test cases.
 *
 **********************************************************************************/

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var result = 0;
    var code = 64; //'A'.charCodeAt() - 1
    for (var n, i = 0, l = s.length - 1; i <= l; ++i) {
        // 'A'.charCodeAt() - ('A'.charCodeAt() - 1)
        // = 'A'.charCodeAt() - 'A'.charCodeAt() + 1
        // = 1
        //
        // 'Z'.charCodeAt() - ('A'.charCodeAt() - 1)
        // = 'Z'.charCodeAt() - 'A'.charCodeAt() + 1
        // = 25 + 1 = 26
        n = s[i].charCodeAt() - code;
        result = result * 26 + n;
    }
    return result;
};

// Test cases
console.log(titleToNumber('A') === 1); // true
console.log(titleToNumber('B') === 2); // true
console.log(titleToNumber('C') === 3); // true
console.log(titleToNumber('Z') === 26); // true
console.log(titleToNumber('AA') === 27); // true
console.log(titleToNumber('AB') === 28); // true
