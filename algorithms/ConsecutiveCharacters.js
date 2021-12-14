// Source : https://leetcode.com/problems/consecutive-characters
// Author : Dean Shi
// Date   : 2021-12-14

/***************************************************************************************
 * The power of the string is the maximum length of a non-empty substring that contains
 * only one unique character.
 * 
 * Given a string s, return the power of s.
 * 
 * Example 1:
 * 
 * Input: s = "leetcode"
 * Output: 2
 * Explanation: The substring "ee" is of length 2 with the character 'e' only.
 * 
 * Example 2:
 * 
 * Input: s = "abbcccddddeeeeedcba"
 * Output: 5
 * Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
 * 
 * Example 3:
 * 
 * Input: s = "triplepillooooow"
 * Output: 5
 * 
 * Example 4:
 * 
 * Input: s = "hooraaaaaaaaaaay"
 * Output: 11
 * 
 * Example 5:
 * 
 * Input: s = "tourist"
 * Output: 1
 * 
 * Constraints:
 * 
 * 1 <= s.length <= 500
 * s consists of only lowercase English letters.
 * 
 * 
 ***************************************************************************************/

/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let [result, count, ch] = [0, 0, '']
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ch) {
            count++
        } else {
            result = Math.max(result, count)
            ch = s[i]
            count = 1
        }
    }

    return Math.max(result, count)
};
