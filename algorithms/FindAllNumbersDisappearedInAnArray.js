// Source : https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array
// Author : Dean Shi
// Date   : 2017-03-31

/***************************************************************************************
 *
 * Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements
 * appear twice and others appear once.
 *
 * Find all the elements of [1, n] inclusive that do not appear in this array.
 *
 * Could you do it without extra space and in O(n) runtime? You may assume the returned
 * list does not count as extra space.
 *
 * Example:
 *
 * Input:
 * [4,3,2,7,8,2,3,1]
 *
 * Output:
 * [5,6]
 *
 *
 ***************************************************************************************/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let i, result = []
    for (let n of nums) {
        i = Math.abs(n) - 1
        nums[i] = nums[i] > 0? -nums[i] : nums[i]
    }
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] > 0) result.push(j + 1)
    }
    return result
};
