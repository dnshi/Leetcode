// Source : https://oj.leetcode.com/problems/search-insert-position/
// Author : Dean Shi
// Date   : 2017-02-25

/********************************************************************************** 
* 
* Given a sorted array and a target value, return the index if the target is found. 
* If not, return the index where it would be if it were inserted in order.
* 
* You may assume no duplicates in the array.
* 
* Here are few examples.
* [1,3,5,6], 5 → 2
* [1,3,5,6], 2 → 1
* [1,3,5,6], 7 → 4
* [1,3,5,6], 0 → 0
* 
*               
**********************************************************************************/

/**
 * Iteration
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let mid, head = 0, tail = nums.length - 1
    while (head <= tail) {
        mid = (head + tail) >> 1
    
        if (nums[mid] === target) return mid
        if (nums[mid] < target) head = mid + 1
        if (nums[mid] > target) tail = mid - 1
    }
    return head
};

/**
 * Recursion
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    return helper(nums, target, 0, nums.length - 1)
};

function helper(arr, target, head, tail) {
    if (head > tail) return head
    
    let mid = (head + tail) >> 1
    
    if (arr[mid] === target) return mid
    if (arr[mid] < target) return helper(arr, target, mid + 1, tail)
    if (arr[mid] > target) return helper(arr, target, head, mid - 1)
}

