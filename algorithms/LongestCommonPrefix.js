// Source : https://oj.leetcode.com/problems/longest-common-prefix/
// Author : Dean Shi
// Date   : 2015-06-08

/**********************************************************************************
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 *
 **********************************************************************************/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var prefix = strs[0] || '';
    for (var i = 1, l = strs.length; i < l; ++i) {
        var curr = strs[i];

        for (var j = 0, k = prefix.length; j < k; ++j) {
            if (curr[j] !== prefix[j]) {
                prefix = curr.slice(0, j);
                break;
            }
        }
    }
    return prefix;
};

// Test case
console.log(longestCommonPrefix(['abcd', 'abdd', 'abbd', 'abab', 'ab']) === 'ab'); // true
