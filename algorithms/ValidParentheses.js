// Source : https://oj.leetcode.com/problems/valid-parentheses/
// Author : Dean Shi
// Date   : 2015-06-11

/**********************************************************************************
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * The brackets must close in the correct order, "()" and "()[]{}" are all valid
 * but "(]" and "([)]" are not.
 *
 *
 **********************************************************************************/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    const openChars = new Set('({[');
    const closeChars = {
        '(': ')',
        '{': '}',
        '[': ']',
    }
    
    for (let ch of s) {
        if (openChars.has(ch)) {
            stack.push(ch)
        } else if (closeChars[stack.pop()] !== ch) {
            return false
        }
    }
    
    return stack.length === 0
};

// Test cases
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
console.log(isValid('([)]')); // false
