// Source : https://leetcode.com/problems/longest-substring-of-all-vowels-in-order
// Author : Dean Shi
// Date   : 2021-05-01

/***************************************************************************************
 * A string is considered beautiful if it satisfies the following conditions:
 *
 * Each of the 5 English vowels ('a', 'e', 'i', 'o', 'u') must appear at least once in
 * it.
 * The letters must be sorted in alphabetical order (i.e. all 'a's before 'e's, all 'e'
 * s before 'i's, etc.).
 *
 * For example, strings "aeiou" and "aaaaaaeiiiioou" are considered beautiful, but "
 * uaeio", "aeoiu", and "aaaeeeooo" are not beautiful.
 *
 * Given a string word consisting of English vowels, return the length of the longest
 * beautiful substring of word. If no such substring exists, return 0.
 *
 * A substring is a contiguous sequence of characters in a string.
 *
 * Example 1:
 *
 * Input: word = "aeiaaioaaaaeiiiiouuuooaauuaeiu"
 * Output: 13
 * Explanation: The longest beautiful substring in word is "aaaaeiiiiouuu" of length 13.
 *
 * Example 2:
 *
 * Input: word = "aeeeiiiioooauuuaeiou"
 * Output: 5
 * Explanation: The longest beautiful substring in word is "aeiou" of length 5.
 *
 * Example 3:
 *
 * Input: word = "a"
 * Output: 0
 * Explanation: There is no beautiful substring, so return 0.
 *
 * Constraints:
 *
 * 1 <= word.length <= 5 * 105
 * word consists of characters 'a', 'e', 'i', 'o', and 'u'.
 *
 *
 ***************************************************************************************/

/**
 * @param {string} word
 * @return {number}
 */
var longestBeautifulSubstring = function(word) {
    const pattern = ['a', 'e', 'i', 'o', 'u']
    let [max, curr, patternIndex] = [0, 0, 0]

    for (let i = 0; i < word.length; i++) {
        const index = pattern.indexOf(word[i])
        if (curr >= 0 && isValid(index, patternIndex)) {
            curr++
            patternIndex = index
            continue
        }

        if (isEndPattern(patternIndex)) {
            max = Math.max(max, curr)
        }

        curr = index === 0 ? 1 : -1
        patternIndex = index
    }

    return Math.max(max, isEndPattern(patternIndex) ? curr : 0)
};

function isEndPattern(patternIndex) {
    return patternIndex === 4
}

function isValid(index, patternIndex) {
    const diff = index - patternIndex
    return 0 <= diff && diff <= 1
}
