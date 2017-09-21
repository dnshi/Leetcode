// Source : https://leetcode.com/problems/valid-palindrome-ii
// Author : Dean Shi
// Date   : 2017-09-21

/**************************************************************************************
 *
 * Given a non-empty string s, you may delete at most one character.  Judge whether you
 * can make it a palindrome
 *
 * Example 1
 * Input: "aba
 * Output: True
 *
 * Example 2
 * Input: "abca
 * Output: True
 * Explanation: You could delete the character 'c
 *
 * Note
 *
 * The string will only contain lowercase characters a-z
 * The maximum length of the string is 50000
 *
 **************************************************************************************/

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0, right = s.length - 1

    while (left < right) {
        if (s[left] !== s[right]) {
            return removeCharAndCheck(s, left, right - 1)
                || removeCharAndCheck(s, left + 1, right)
        }
        ++left
        --right
    }
    return true
};

function removeCharAndCheck(s, left, right) {
    while (left < right) {
        if (s[left++] !== s[right--]) return false
    }
    return true
}
