// Source : https://leetcode.com/problems/min-stack
// Author : Dean Shi
// Date   : 2017-03-11

/***************************************************************************************
 *
 * Design a stack that supports push, pop, top, and retrieving the minimum element in
 * constant time.
 *
 * push(x) -- Push element x onto stack.
 *
 * pop() -- Removes the element on top of the stack.
 *
 * top() -- Get the top element.
 *
 * getMin() -- Retrieve the minimum element in the stack.
 *
 * Example:
 *
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> Returns -3.
 * minStack.pop();
 * minStack.top();      --> Returns 0.
 * minStack.getMin();   --> Returns -2.
 *
 *
 ***************************************************************************************/

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    const min = this.stack.length > 0
        ? this.stack[this.stack.length - 1].min
        : Number.MAX_SAFE_INTEGER
    this.stack.push({
        val: x,
        min: Math.min(min, x)
    })
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1].val
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1].min
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
