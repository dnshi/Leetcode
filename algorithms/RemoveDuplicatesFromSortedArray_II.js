// Source : https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii
// Author : Dean Shi
// Date   : 2017-03-04

/***************************************************************************************
 *
 * Follow up for "Remove Duplicates":
 * What if duplicates are allowed at most twice?
 *
 * For example,
 * Given sorted array nums = [1,1,1,2,2,3],
 *
 * Your function should return length = 5, with the first five elements of nums being
 * 1, 1, 2, 2 and 3. It doesn't matter what you leave beyond the new length.
 *
 *
 ***************************************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let pointer = 0
    for (let i = 1, isRepeated = false; i < nums.length; i++) {
        if (nums[pointer] !== nums[i]) {
            nums[++pointer] = nums[i]
            isRepeated = false
        } else if (!isRepeated) {
            nums[++pointer] = nums[i]
            isRepeated = true
        }
    }
    return nums.length ? pointer + 1 : 0
};
