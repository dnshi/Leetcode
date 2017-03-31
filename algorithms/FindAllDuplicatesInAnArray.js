// Source : https://leetcode.com/problems/find-all-duplicates-in-an-array
// Author : Dean Shi
// Date   : 2017-03-31

/***************************************************************************************
 *
 * Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear
 * twice and others appear once.
 *
 * Find all the elements that appear twice in this array.
 *
 * Could you do it without extra space and in O(n) runtime?
 *
 * Example:
 *
 * Input:
 * [4,3,2,7,8,2,3,1]
 *
 * Output:
 * [2,3]
 *
 *
 ***************************************************************************************/

/**
 * Using Set - Space complexity = O(n) and Runtime complexity = O(n)
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const numsSet = new Set(), result = []
    nums.forEach(n => numsSet.has(n) ? result.push(n) : numsSet.add(n))
    return result
};

/**
 * In Space - Space complexity = O(1) and Runtime complexity = O(n)
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const result = []
    for (let n of nums) {
        n = Math.abs(n) - 1
        if (nums[n] < 0) result.push(Math.abs(n + 1))
        nums[n] = -nums[n]
    }
    return result
};
