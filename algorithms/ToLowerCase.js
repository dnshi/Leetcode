// Source : https://leetcode.com/problems/to-lower-case
// Author : Dean Shi
// Date   : 2018-08-27

/***************************************************************************************
 * Implement function ToLowerCase() that has a string parameter str, and returns the
 * same string in lowercase.
 *
 * Example 1:
 *
 * Input: "Hello"
 * Output: "hello"
 *
 * Example 2:
 *
 * Input: "here"
 * Output: "here"
 *
 * Example 3:
 *
 * Input: "LOVELY"
 * Output: "lovely"
 *
 ***************************************************************************************/

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    const result = []

    for (let i = 0; i < str.length; i++) {
      result.push(
          'A' <= str[i] && str[i] <= 'Z'
          ? String.fromCharCode(str.charCodeAt(i) + 32)
          : str[i]
      )
    }
    return result.join('')
};
