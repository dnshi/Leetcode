// Source : https://leetcode.com/problems/remove-element
// Author : Dean Shi
// Date   : 2017-07-10

/***************************************************************************************
 *
 * Given an array and a value, remove all instances of that value in place and return
 * the new length.
 *
 * Do not allocate extra space for another array, you must do this in place with
 * constant memory.
 *
 * The order of elements can be changed. It doesn't matter what you leave beyond the
 * new length.
 *
 * Example:
 * Given input array nums = [3,2,2,3], val = 3
 *
 * Your function should return length = 2, with the first two elements of nums being 2.
 *
 *
 ***************************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let pointer = 0
    for (let n of nums) if (n !== val) nums[pointer++] = n

    return pointer
};
