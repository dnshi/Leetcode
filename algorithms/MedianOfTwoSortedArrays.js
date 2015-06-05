// Source : https://oj.leetcode.com/problems/median-of-two-sorted-arrays/
// Author : Dean Shi
// Date   : 2015-06-04

/**********************************************************************************
 *
 * There are two sorted arrays A and B of size m and n respectively.
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 *
 **********************************************************************************/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // Merge nums2 into nums1
    for (var n1Index = 0, n2Index = 0, l = nums2.length; n2Index < l; ++n2Index) {
        while (nums2[n2Index] > nums1[n1Index]) {
            n1Index++;
        }
        nums1.splice(n1Index, 0, nums2[n2Index]);
    }

    var n = nums1.length / 2;
    return (nums1.length % 2 === 0) ? (nums1[n] + nums1[n - 1]) / 2 : nums1[n - 0.5];
};

console.log(findMedianSortedArrays([], [1, 2, 3, 4]) === 2.5); // true
console.log(findMedianSortedArrays([2], []) === 2); // true
console.log(findMedianSortedArrays([1, 2], [1, 2]) === 1.5); // true
console.log(findMedianSortedArrays([1, 2, 3], [1, 2]) === 2); // true
console.log(findMedianSortedArrays([4, 5, 6, 8, 9], []) === 6); // true
