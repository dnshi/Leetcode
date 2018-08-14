// Source : https://leetcode.com/problems/uncommon-words-from-two-sentences
// Author : Dean Shi
// Date   : 2018-08-13

/***************************************************************************************
 * We are given two sentences A and B.  (A sentence is a string of space separated
 * words.  Each word consists only of lowercase letters.)
 *
 * A word is uncommon if it appears exactly once in one of the sentences, and does not
 * appear in the other sentence.
 *
 * Return a list of all uncommon words.
 *
 * You may return the list in any order.
 *
 * Example 1:
 *
 * Input: A = "this apple is sweet", B = "this apple is sour"
 * Output: ["sweet","sour"]
 *
 * Example 2:
 *
 * Input: A = "apple apple", B = "banana"
 * Output: ["banana"]
 *
 * Note:
 *
 * 0 <= A.length <= 200
 * 0 <= B.length <= 200
 * A and B both contain only spaces and lowercase letters.
 *
 ***************************************************************************************/

/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    const wordList = A.split(' ').concat(B.split(' '))
    const table = {}

    wordList.forEach((word) => {
        if (table[word]) ++table[word]
        else table[word] = 1
    })

    return Object
        .entries(table)
        .filter(([word, count]) => count === 1 && word !== '')
        .map(([word]) => word)
};
