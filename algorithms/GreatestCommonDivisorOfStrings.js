// Source : https://leetcode.com/problems/greatest-common-divisor-of-strings
// Author : Dean Shi
// Date   : 2019-06-08

/***************************************************************************************
 *
 * For strings S and T, we say "T divides S" if and only if S = T + ... + T  (T
 * concatenated with itself 1 or more times)
 *
 * Return the largest string X such that X divides str1 and X divides str2.
 *
 * Example 1:
 *
 * Input: str1 = "ABCABC", str2 = "ABC"
 * Output: "ABC"
 *
 * Example 2:
 *
 * Input: str1 = "ABABAB", str2 = "ABAB"
 * Output: "AB"
 *
 * Example 3:
 *
 * Input: str1 = "LEET", str2 = "CODE"
 * Output: ""
 *
 * Note:
 *
 * 1 <= str1.length <= 1000
 * 1 <= str2.length <= 1000
 * str1[i] and str2[i] are English uppercase letters.
 *
 ***************************************************************************************/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if ((str1 + str2) !== (str2 + str1)) return ''

    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
    return str1.substring(0, gcd(str1.length, str2.length))
};
