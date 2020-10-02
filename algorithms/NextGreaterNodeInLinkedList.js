/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function (head) {
    let stack = [];
    let sol = [];
    let ptr = head;
    while (ptr) {
        while (stack.length > 0 && getTopVal(stack) < ptr.val) {
            let e = stack.pop();
            e.val = ptr.val;
        }
        stack.push(ptr);
        ptr = ptr.next;
    }
    while (stack.length > 0) {
        let e = stack.pop();
        e.val = 0;
    }
    ptr = head;
    while (ptr) {
        sol.push(ptr.val);
        ptr = ptr.next;
    }
    return sol;
};

var getTopVal = function (stack) {
    return stack[stack.length - 1].val;
}