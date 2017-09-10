// Source : https://leetcode.com/problems/longest-continuous-increasing-subsequence
// Author : Dean Shi
// Date   : 2017-09-10

/***************************************************************************************
 *
 * Given an unsorted array of integers, find the length of longest continuous
 * increasing subsequence.
 *
 * Example 1:
 *
 * Input: [1,3,5,4,7]
 * Output: 3
 * Explanation: The longest continuous increasing subsequence is [1,3,5], its length is
 * 3.
 * Even though [1,3,5,7] is also an increasing subsequence, it's not a continuous one
 * where 5 and 7 are separated by 4.
 *
 * Example 2:
 *
 * Input: [2,2,2,2,2]
 * Output: 1
 * Explanation: The longest continuous increasing subsequence is [2], its length is 1.
 *
 * Note:
 * Length of the array will not exceed 10,000.
 *
 *
 ***************************************************************************************/

/**
 * JS reduce method
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if (!nums.length) return 0

    let len = 1, longest = 1
    nums.reduce((prev, curr) => {
        if (prev >= curr) len = 1
        else longest = Math.max(longest, ++len)
        return curr
    })

    return longest
};

/**
 * Iteration
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if (!nums.length) return 0

    let longest = 1

    for (let len = 1, i = 1; i < nums.length; ++i) {
        if (nums[i - 1] < nums[i]) longest = Math.max(longest, ++len)
        else len = 1
    }

    return longest
};
