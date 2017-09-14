// Source : https://leetcode.com/problems/reverse-vowels-of-a-string
// Author : Dean Shi
// Date   : 2017-09-14

/***************************************************************************************
 *
 * Write a function that takes a string as input and reverse only the vowels of a
 * string.
 *
 * Example 1:
 * Given s = "hello", return "holle".
 *
 * Example 2:
 * Given s = "leetcode", return "leotcede".
 *
 * Note:
 * The vowels does not include the letter "y".
 *
 ***************************************************************************************/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let [lpt, rpt] = [0, s.length - 1]
    let vowels = new Set('aeiouAEIOU')
    const result = [...s]

    while (lpt < rpt) {
        while (lpt < rpt && !vowels.has(s[lpt])) ++lpt
        while (lpt < rpt && !vowels.has(s[rpt])) --rpt

        ;[result[lpt++], result[rpt--]] = [result[rpt], result[lpt]]
    }
    return result.join('')
};
