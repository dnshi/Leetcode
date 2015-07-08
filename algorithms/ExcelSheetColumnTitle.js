// Source : https://oj.leetcode.com/problems/excel-sheet-column-title/
// Author : Dean Shi
// Date   : 2015-06-18

/**********************************************************************************
 *
 * Given a positive integer, return its corresponding column title as appear in an Excel sheet.
 *
 * For example:
 *
 *     1 -> A
 *     2 -> B
 *     3 -> C
 *     ...
 *     26 -> Z
 *     27 -> AA
 *     28 -> AB
 *
 * Credits:Special thanks to @ifanchu for adding this problem and creating all test cases.
 *
 **********************************************************************************/

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var result = '';
    var code = 65; //'A'.charCodeAt()

    // loop when n is greater than 0
    while (n) {
        // (n - 1) % 26 will return a num on range 0 ~ 25
        // 0 + A.charCodeAt() = A.charCodeAt()
        // 25 + A.charCodeAt() = Z.charCodeAt()
        result = String.fromCharCode((n - 1) % 26 + code) + result;
        n = ~~((n - 1) / 26);
    }
    return result;
};

// Test cases
console.log(convertToTitle(1) === 'A'); // true
console.log(convertToTitle(2) === 'B'); // true
console.log(convertToTitle(3) === 'C'); // true
console.log(convertToTitle(26) === 'Z'); // true
console.log(convertToTitle(27) === 'AA'); // true
console.log(convertToTitle(28) === 'AB'); // true
