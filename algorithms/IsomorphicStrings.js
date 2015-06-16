// Source : https://leetcode.com/problems/isomorphic-strings/
// Author : Dean Shi
// Date   : 2015-06-16

/**********************************************************************************
 *
 * Given two strings s and t, determine if they are isomorphic.
 *
 * Two strings are isomorphic if the characters in s can be replaced to get t.
 *
 * All occurrences of a character must be replaced with another character while preserving
 * the order of characters. No two characters may map to the same character but a character
 *  may map to itself.
 *
 * For example,
 *
 *     Given "egg", "add", return true.
 *
 *     Given "foo", "bar", return false.
 *
 *     Given "paper", "title", return true.
 *
 * Note:
 * You may assume both s and t have the same length.
 *
 **********************************************************************************/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var s_map = {};
    var t_map = {};

    for (var i = 0, l = s.length; i < l; ++i) {
        if (!s_map[s[i]] && !t_map[t[i]]) {
            s_map[s[i]] = t[i];
            t_map[t[i]] = s[i];
        } else if (s_map[s[i]] !== t[i] || t_map[t[i]] !== s[i]) {
            return false;
        }
    }
    return true;
};

// Test cases
console.log(isIsomorphic('egg', 'add')); // true
console.log(isIsomorphic('foo', 'bar')); // false
console.log(isIsomorphic('paper', 'title')); // true
