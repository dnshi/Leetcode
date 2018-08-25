// Source : https://leetcode.com/problems/backspace-string-compare
// Author : Dean Shi
// Date   : 2018-08-25

/***************************************************************************************
 * Given two strings S and T, return if they are equal when both are typed into empty
 * text editors. # means a backspace character.
 *
 * Example 1:
 *
 * Input: S = "ab#c", T = "ad#c"
 * Output: true
 * Explanation: Both S and T become "ac".
 *
 * Example 2:
 *
 * Input: S = "ab##", T = "c#d#"
 * Output: true
 * Explanation: Both S and T become "".
 *
 * Example 3:
 *
 * Input: S = "a##c", T = "#a#c"
 * Output: true
 * Explanation: Both S and T become "c".
 *
 * Example 4:
 *
 * Input: S = "a#c", T = "b"
 * Output: false
 * Explanation: S becomes "c" while T becomes "b".
 *
 * Note:
 *
 * 1 <= S.length <= 200
 * 1 <= T.length <= 200
 * S and T only contain lowercase letters and '#' characters.
 *
 * Follow up:
 *
 * Can you solve it in O(N) time and O(1) space?
 *
 ***************************************************************************************/

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    const sStack = []
    const tStack = []

    for (let c of S) c !== '#' ? sStack.push(c) : sStack.pop()
    for (let c of T) c !== '#' ? tStack.push(c) : tStack.pop()

    return sStack.join('') === tStack.join('')
};
