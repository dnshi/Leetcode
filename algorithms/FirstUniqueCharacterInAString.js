// Source : https://leetcode.com/problems/first-unique-character-in-a-string
// Author : Dean Shi
// Date   : 2017-03-08

/***************************************************************************************
 *
 * Given a string, find the first non-repeating character in it and return it's index.
 * If it doesn't exist, return -1.
 *
 * Examples:
 *
 * s = "leetcode"
 * return 0.
 *
 * s = "loveleetcode",
 * return 2.
 *
 * Note: You may assume the string contain only lowercase letters.
 *
 *
 ***************************************************************************************/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = new Map()

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) map.set(s[i], false)
        else map.set(s[i], i)
    }

    for (let [ch, index] of map) {
        if (typeof index === 'number') return index
    }
    return -1
};
