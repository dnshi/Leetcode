// Source : https://leetcode.com/problems/3sum
// Author : Dean Shi
// Date   : 2017-08-02

/***************************************************************************************
 *
 * Given an array S of n integers, are there elements a, b, c in S such that a + b + c
 * = 0? Find all unique triplets in the array which gives the sum of zero.
 *
 * Note: The solution set must not contain duplicate triplets.
 *
 * For example, given array S = [-1, 0, 1, 2, -1, -4],
 *
 * A solution set is:
 * [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 * ]
 *
 *
 ***************************************************************************************/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let sum, right, left
    const result = []
    nums.sort((a, b) => a - b).forEach((n, i) => {
        [left, right] = [i+1, nums.length-1]
        if (n !== nums[i-1]) while (left < right) {
            sum = n + nums[left] + nums[right]
            if (sum === 0) {
                result.push([n, nums[left], nums[right]])
                while (left < right && nums[left] === nums[left+1]) ++left
                while (left < right && nums[right] === nums[right-1]) --right
                --right;++left
            }
            else if (sum > 0) --right
            else ++left
        }
    })

    return result
};
