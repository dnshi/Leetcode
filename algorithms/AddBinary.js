// Source : https://leetcode.com/problems/add-binary
// Author : Dean Shi
// Date   : 2017-07-11

/***************************************************************************************
 *
 * Given two binary strings, return their sum (also a binary string).
 *
 * For example,
 * a = "11"
 * b = "1"
 * Return "100".
 *
 *
 ***************************************************************************************/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let [i, j, c, s] = [a.length - 1, b.length - 1, 0, '']

    while (i >= 0 || j >= 0 || c === 1) {
        c += +(a[i--] || 0) + +(b[j--] || 0)
        s = (c & 1) + s
        c = c >> 1
    }
    return s
};
