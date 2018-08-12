// Source : https://leetcode.com/problems/buddy-strings
// Author : Dean Shi
// Date   : 2018-08-12

/***************************************************************************************
 * Given two strings A and B of lowercase letters, return true if and only if we can
 * swap two letters in A so that the result equals B.
 *
 * Example 1:
 *
 * Input: A = "ab", B = "ba"
 * Output: true
 *
 * Example 2:
 *
 * Input: A = "ab", B = "ab"
 * Output: false
 *
 * Example 3:
 *
 * Input: A = "aa", B = "aa"
 * Output: true
 *
 * Example 4:
 *
 * Input: A = "aaaaaaabc", B = "aaaaaaacb"
 * Output: true
 *
 * Example 5:
 *
 * Input: A = "", B = "aa"
 * Output: false
 *
 * Note:
 *
 * 0 <= A.length <= 20000
 * 0 <= B.length <= 20000
 * A and B consist only of lowercase letters.
 *
 ***************************************************************************************/

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    if (A.length !== B.length) return false
    if (A === B) return A.length !== new Set(A).size

    let countOfDiff = 0
    const ASet = new Set(A)
    for (let i = 0; i < A.length; i++) {
        if (A[i] !== B[i] && (++countOfDiff === 3 || !ASet.has(B[i]))) return false
    }

    return true
};
