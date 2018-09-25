// Source : https://leetcode.com/problems/longest-common-prefix
// Author : Dean Shi
// Date   : 2015-06-08

/***************************************************************************************
 *
 * Write a function to find the longest common prefix string amongst an array of
 * strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 *
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 *
 * Example 2:
 *
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 * Note:
 *
 * All given inputs are in lowercase letters a-z.
 *
 ***************************************************************************************/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs || strs.length === 0) return ''

    let prefix = strs[0]
    for (let curr of strs) {
        for (let i = 0; i < prefix.length; i++) {
            if (curr[i] !== prefix[i]) {
                prefix = curr.slice(0, i)
                break
            }
        }
    }
    return prefix
};
