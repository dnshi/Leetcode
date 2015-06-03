// Source : https://oj.leetcode.com/problems/longest-substring-without-repeating-characters/
// Author : Dean Shi
// Date   : 2015-06-01

/**********************************************************************************
 *
 * Given a string, find the length of the longest substring without repeating characters.
 * For example, the longest substring without repeating letters for "abcabcbb" is "abc",
 * which the length is 3. For "bbbbb" the longest substring is "b", with the length of 1.
 *
 **********************************************************************************/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var max = 0;
    var last = -1;
    var map = {};

    for (var i = 0, l = s.length; i < l; ++i) {
        if (map[s[i]] >= 0 && last < map[s[i]]) {
            last = map[s[i]];
        }

        if (i - last > max) {
            max = i - last;
        }

        map[s[i]] = i;
    }
    return max;
};

var testCase1 = 'abcabcbb';
var testCase2 = 'bbbbb';

console.log(lengthOfLongestSubstring(testCase1) === 3); // true
console.log(lengthOfLongestSubstring(testCase2) === 1); // true
