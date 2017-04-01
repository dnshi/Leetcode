// Source : https://leetcode.com/problems/longest-palindrome
// Author : Dean Shi
// Date   : 2017-04-01

/***************************************************************************************
 *
 * Given a string which consists of lowercase or uppercase letters, find the length of
 * the longest palindromes that can be built with those letters.
 *
 * This is case sensitive, for example "Aa" is not considered a palindrome here.
 *
 * Note:
 * Assume the length of given string will not exceed 1,010.
 *
 * Example:
 *
 * Input:
 * "abccccdd"
 *
 * Output:
 * 7
 *
 * Explanation:
 * One longest palindrome that can be built is "dccaccd", whose length is 7.
 *
 *
 ***************************************************************************************/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const map = new Map()
    let hasOdd = false, length = 0

    for (let ch of s) {
        map.set(ch, ~~(map.get(ch)) + 1)
    }

    for (let n of map.values()) {
        length += n >> 1 << 1
        hasOdd = hasOdd || n % 2 === 1
    }
    return length + (hasOdd ? 1 : 0)
};
