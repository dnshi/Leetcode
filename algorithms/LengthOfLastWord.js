// Source : https://oj.leetcode.com/problems/length-of-last-word/
// Author : Dean Shi
// Date   : 2015-06-16

/**********************************************************************************
 *
 * Given a string s consists of upper/lower-case alphabets and empty space characters ' ',
 * return the length of last word in the string.
 *
 * If the last word does not exist, return 0.
 *
 * Note: A word is defined as a character sequence consists of non-space characters only.
 *
 * For example,
 * Given s = "Hello World",
 * return 5.
 *
 *
 **********************************************************************************/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var arr = s.match(/\S+/g) || 0;
    return arr && arr.pop().length;
};

// Test case
console.log(lengthOfLastWord('Hello Wrold') === 5); // true
