// Source : https://leetcode.com/problems/contains-duplicate/
// Author : Dean Shi
// Date   : 2015-06-16

/**********************************************************************************
 *
 * Given an array of integers, find if the array contains any duplicates.
 * Your function should return true if any value appears at least twice in the array,
 * and it should return false if every element is distinct.
 *
 **********************************************************************************/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var hash = {};
    for (var i in nums) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = true;
        } else {
            return true;
        }
    }
    return false;
};

// Test case
console.log(containsDuplicate([3, 3])); // true
