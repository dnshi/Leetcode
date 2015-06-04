// Source : https://oj.leetcode.com/problems/single-number/
// Author : Dean Shi
// Date   : 2015-05-29

/**********************************************************************************
 *
 * Given an array of integers, every element appears twice except for one. Find that single one.
 *
 * Note:
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 *
 *
 **********************************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // Solution 1:
    // Runtime: 164 ms
    return nums.reduce(function(pre, cur) {
        return pre ^ cur;
    });

    // Solution 2:
    // Runtime: 140 ms
    // var res;
    // for (var i in nums) {
    //     res ^= nums[i];
    // }
    // return res;

    // Solution 3:
    // Runtime: 128 ms
    // var res = nums[0];
    // for (var i = 1, l = nums.length; i < l; ++i) {
    //     res ^= nums[i];
    // }
    // return res;
};

var testCase = [1, 1, 2, 2, 3];

console.log(singleNumber(testCase) === 3); // true
