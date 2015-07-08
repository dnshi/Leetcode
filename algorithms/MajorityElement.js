// Source : https://oj.leetcode.com/problems/majority-element/
// Author : Dean Shi
// Date   : 2015-06-18

/**********************************************************************************
 *
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 *
 * You may assume that the array is non-empty and the majority element always exist in the array.
 *
 * Credits:Special thanks to @ts for adding this problem and creating all test cases.
 *
 **********************************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // Moore Voting Algorithm
    var majority, count = 0;
    nums.forEach(function(n) {
        if (count === 0) {
            majority = n;
            count = 1;
        } else {
            n === majority ? ++count : --count;
        }
    });
    return majority;
};

// Test case
console.log(majorityElement([1, 2, 1, 1, 1, 2, 3, 1, 3, 1]) === 1);
