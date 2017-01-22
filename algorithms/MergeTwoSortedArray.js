// Source : https://oj.leetcode.com/problems/merge-sorted-array/
// Author : Dean Shi
// Date   : 2015-05-29

/**********************************************************************************
 *
 * Given two sorted integer arrays A and B, merge B into A as one sorted array.
 *
 * Note:
 *   You may assume that A has enough space (size that is greater or equal to m + n)
 *   to hold additional elements from B. The number of elements initialized in A and B
 *   are m and n respectively.
 *
 **********************************************************************************/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1, j = n - 1, k = m + n - 1
    
    while(i >= 0 && j >= 0) {
        nums1[k--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--]
    }
    while(j >= 0) {
        nums1[k--] = nums2[j--]
    }
};

// Test case
var m = [4, 5, 6, 0, 0, 0];
var n = [1, 2, 3];
merge(m, 3, n, 3);

console.log(m.toString() === '1,2,3,4,5,6'); // true
