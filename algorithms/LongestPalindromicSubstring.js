// Source : https://oj.leetcode.com/problems/longest-palindromic-substring/
// Author : Dean Shi
// Date   : 2015-06-02

/**********************************************************************************
 *
 * Given a string S, find the longest palindromic substring in S.
 * You may assume that the maximum length of S is 1000,
 * and there exists one unique longest palindromic substring.
 *
 **********************************************************************************/

/**
 * @param {string} s
 * @return {string}
 */
// The following code should be optimized.
var longestPalindrome = function(s) {
    var tmp, index, max = '';
    if (s.length === 1) {
        return s;
    }
    for (var i = 1, l = s.length; i < l; ++i) {
        if (s[i + 1] === s[i - 1]) {
            tmp = s[i - 1] + s[i] + s[i + 1];
            index = 2;

            while ((i - index >= 0) && (i + index < l)) {
                if (s[i - index] === s[i + index]) {
                    tmp = s[i - index] + tmp + s[i + index];
                } else {
                    break;
                }
                ++index;
            }

            (max.length < tmp.length) && (max = tmp);
        }

        if (s[i] === s[i - 1]) {
            tmp = s[i - 1] + s[i];
            index = 2;

            while ((i - index >= 0) && ((i + index - 1) < l)) {
                if (s[i - index] === s[i + index - 1]) {
                    tmp = s[i - index] + tmp + s[i + index - 1];
                } else {
                    break;
                }
                ++index;
            }
            (max.length < tmp.length) && (max = tmp);
        }
    }

    return max;
};

var testCase = 'abcbadddd';

console.log(longestPalindrome(testCase) === 'abcba'); // true
