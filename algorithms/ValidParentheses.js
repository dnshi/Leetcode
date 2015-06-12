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
    var stack = [];
    for (var i = 0, l = s.length; i < l; ++i) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else if (s[i] === ')' && stack.pop() !== '(') {
            return false;
        } else if (s[i] === '}' && stack.pop() !== '{') {
            return false;
        } else if (s[i] === ']' && stack.pop() !== '[') {
            return false;
        }
    }
    return stack.length ? false : true;
};

// Test cases
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
console.log(isValid('([)]')); // false
