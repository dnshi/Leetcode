// Source : https://oj.leetcode.com/problems/two-sum/
// Author : Dean Shi
// Date   : 2015-05-30

/**********************************************************************************
 *
 * Given an array of integers, find two numbers such that they add up to a specific target number.
 *
 * The function twoSum should return indices of the two numbers such that they add up to the target,
 * where index1 must be less than index2. Please note that your returned answers (both index1 and index2)
 * are not zero-based.
 *
 * You may assume that each input would have exactly one solution.
 *
 * Input: numbers={2, 7, 11, 15}, target=9
 * Output: index1=1, index2=2
 *
 *
 **********************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hash = {};
    var result = [];

    for (var i = 0, l = nums.length; i < l; ++i) {
        var n = nums[i];

        // find the second one
        if (hash[n] > 0) {
            result.push(hash[n], i + 1);
            break;
        } else {
            // store the index
            hash[target - n] = i + 1;
        }
    }
    return result;
};

var testCase = [2, 7, 11, 15];
var result = twoSum(testCase, 9);

console.log(result.toString() === '1,2'); // true
