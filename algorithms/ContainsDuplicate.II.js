// Source : https://leetcode.com/problems/contains-duplicate-ii/
// Author : Dean Shi
// Date   : 2015-06-16

/**********************************************************************************
 *
 * Given an array of integers and an integer k, find out whether there there are
 * two distinct indices i and j in the array such that nums[i] = nums[j] and
 * the difference between i and j is at most k.
 *
 *
 **********************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var n, hash = {};
    for (var i in nums) {
        n = nums[i];
        if (i - hash[n] <= k) {
            return true;
        }
        hash[n] = i;
    }
    return false;
};

// Test case
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
