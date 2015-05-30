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
    var n1Index = 0;

    // Trim trailing 0s on nums1
    // Runtime: 152 ms
    nums1.splice(m);

    // Runtime: 141 ms
    // while (m != nums1.length) {
    //     nums1.pop();
    // }

    for (var n2Index = 0; n2Index < n; n2Index++) {
        while (nums2[n2Index] > nums1[n1Index]) {
            n1Index++;
        }
        nums1.splice(n1Index, 0, nums2[n2Index]);
    }
};

// Test case
var m = [4, 5, 6, 0, 0, 0];
var n = [1, 2, 3];
merge(m, 3, n, 3);

console.log(m.toString() === '1,2,3,4,5,6'); // true
