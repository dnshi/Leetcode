// Source : https://oj.leetcode.com/problems/letter-combinations-of-a-phone-number/
// Author : Dean Shi
// Date   : 2015-06-11

/**********************************************************************************
 *
 * Given a digit string, return all possible letter combinations that the number could represent.
 *
 * A mapping of digit to letters (just like on the telephone buttons) is given below.
 *
 * Input:Digit string "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 *
 * Note:
 * Although the above answer is in lexicographical order, your answer could be in any order you want.
 *
 *
 **********************************************************************************/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let result,
    const [first, ...rest] = digits
    const digitMap = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }

    return rest.reduce((arr, d) => {
        result = []
        arr.forEach(a => digitMap[d].forEach(b => result.push(a + b)))
        return result
    }, digitMap[first] || [])
};
