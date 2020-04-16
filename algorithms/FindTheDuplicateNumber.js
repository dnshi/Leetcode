// Source : https://leetcode.com/problems/find-the-duplicate-number
// Author : Dean Shi
// Date   : 2020-04-16

/***************************************************************************************
 *
 * Given an array nums containing n + 1 integers where each integer is between 1 and n (
 * inclusive), prove that at least one duplicate number must exist. Assume that there
 * is only one duplicate number, find the duplicate one.
 *
 * Example 1:
 *
 * Input: [1,3,4,2,2]
 * Output: 2
 *
 * Example 2:
 *
 * Input: [3,1,3,4,2]
 * Output: 3
 *
 * Note:
 *
 * You must not modify the array (assume the array is read only).
 * You must use only constant, O(1) extra space.
 * Your runtime complexity should be less than O(n2).
 * There is only one duplicate number in the array, but it could be repeated more than
 * once.
 *
 ***************************************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let [fastPt, slowPt] = [nums[0], nums[0]]

    do {
        [fastPt, slowPt] = [nums[fastPt], nums[nums[slowPt]]]
    } while(fastPt !== slowPt)

    let [pt1, pt2] = [nums[0], fastPt]

    while (pt1 !== pt2) {
        [pt1, pt2] = [nums[pt1], nums[pt2]]
    }

    return pt1
};
