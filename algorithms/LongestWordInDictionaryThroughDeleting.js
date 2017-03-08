// Source : https://leetcode.com/problems/longest-word-in-dictionary-through-deleting
// Author : Dean Shi
// Date   : 2017-03-08

/***************************************************************************************
 *
 * Given a string and a string dictionary, find the longest string in the dictionary
 * that can be formed by deleting some characters of the given string. If there are
 * more than one possible results, return the longest word with the smallest
 * lexicographical order. If there is no possible result, return the empty string.
 *
 * Example 1:
 *
 * Input:
 * s = "abpcplea", d = ["ale","apple","monkey","plea"]
 *
 * Output:
 * "apple"
 *
 * Example 2:
 *
 * Input:
 * s = "abpcplea", d = ["a","b","c"]
 *
 * Output:
 * "a"
 *
 * Note:
 *
 * All the strings in the input will only contain lower-case letters.
 * The size of the dictionary won't exceed 1,000.
 * The length of all the strings in the input won't exceed 1,000.
 *
 *
 ***************************************************************************************/

/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    let dir = d.sort((a, b) => b.length - a.length)
    let result = []
    let longestLen = 0
    for (let i = 0; i < dir.length; i++) {
        if (longestLen > dir[i].length) break;
        if (helper(s, dir[i])) {
            longestLen = dir[i].length
            result.push(dir[i])
        }
    }

    return result.length ? result.sort()[0] : ''
};

function helper(s, t) {
    if (t.length === 0) return true
    if (s.length === 0) return false
    if (s[0] === t[0]) {
        return helper(s.substring(1), t.substring(1))
    }
    return helper(s.substring(1), t)
}
