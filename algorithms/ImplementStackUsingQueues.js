// Source : https://leetcode.com/problems/implement-stack-using-queues/
// Author : Dean Shi
// Date   : 2015-06-13

/**********************************************************************************
 *
 * Implement the following operations of a stack using queues.
 *
 * push(x) -- Push element x onto stack.
 *
 * pop() -- Removes the element on top of the stack.
 *
 * top() -- Get the top element.
 *
 * empty() -- Return whether the stack is empty.
 *
 * Notes:
 *
 * You must use only standard operations of a queue -- which means only push to back,
 * peek/pop from front, size, and is empty operations are valid.
 *
 * Depending on your language, queue may not be supported natively. You may simulate
 * a queue by using a list or deque (double-ended queue), as long as you use only
 * standard operations of a queue.
 *
 * You may assume that all operations are valid (for example, no pop or top operations
 * will be called on an empty stack).
 *
 * Update (2015-06-11):
 * The class name of the Java function had been updated to MyStack instead of Stack.
 *
 * Credits:Special thanks to @jianchao.li.fighter for adding this problem and all test cases.
 *
 **********************************************************************************/

/**
 * @constructor
 */
var Stack = function() {
    this.stack = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
    return !this.stack.length;
};
