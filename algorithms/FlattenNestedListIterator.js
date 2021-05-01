// Source : https://leetcode.com/problems/flatten-nested-list-iterator
// Author : Dean Shi
// Date   : 2021-05-01

/***************************************************************************************
 * You are given a nested list of integers nestedList. Each element is either an
 * integer or a list whose elements may also be integers or other lists. Implement an
 * iterator to flatten it.
 *
 * Implement the NestedIterator class:
 *
 * NestedIterator(List<NestedInteger> nestedList) Initializes the iterator with the
 * nested list nestedList.
 * int next() Returns the next integer in the nested list.
 * boolean hasNext() Returns true if there are still some integers in the nested list
 * and false otherwise.
 *
 * Example 1:
 *
 * Input: nestedList = [[1,1],2,[1,1]]
 * Output: [1,1,2,1,1]
 * Explanation: By calling next repeatedly until hasNext returns false, the order of
 * elements returned by next should be: [1,1,2,1,1].
 *
 * Example 2:
 *
 * Input: nestedList = [1,[4,[6]]]
 * Output: [1,4,6]
 * Explanation: By calling next repeatedly until hasNext returns false, the order of
 * elements returned by next should be: [1,4,6].
 *
 * Constraints:
 *
 * 1 <= nestedList.length <= 500
 * The values of the integers in the nested list is in the range [-106, 106].
 *
 *
 ***************************************************************************************/

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
    this.list = flatten(nestedList)
    this.pt = 0
};

function flatten(nestedList) {
    const result = []
    for (const i of nestedList) {
        if (i.isInteger()) {
            result.push(i.getInteger())
        } else {
            result.push(...flatten(i.getList()))
        }
    }
    return result
}

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    return this.pt < this.list.length
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    return this.list[this.pt++]
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
