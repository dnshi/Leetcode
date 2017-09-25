// Source : https://leetcode.com/problems/basic-calculator-ii
// Author : Dean Shi
// Date   : 2017-09-25

/***************************************************************************************
 *
 * Implement a basic calculator to evaluate a simple expression string.
 *
 * The expression string contains only non-negative integers, +, -, *, / operators and
 * empty spaces  . The integer division should truncate toward zero.
 *
 * You may assume that the given expression is always valid.
 *
 * Some examples:
 * "3+2*2" = 7
 * " 3/2 " = 1
 * " 3+5 / 2 " = 5
 *
 * Note: Do not use the eval built-in library function.
 *
 * Credits:Special thanks to @ts for adding this problem and creating all test cases.
 *
 ***************************************************************************************/

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const stack = []
    const arr = s.match(/\d+|\+|\/|-|\*/g);
    const operators = {
        '+': num => stack.push(+num),
        '-': num => stack.push(-num),
        '*': num => stack.push(stack.pop() * +num),
        '/': num => stack.push(~~(stack.pop() / +num)),
    }

    let opt = '+'
    for (const c of arr) {
        c in operators ? opt = c : operators[opt](c)
    }

    return stack.reduce((sum, num) => sum + num)
};
