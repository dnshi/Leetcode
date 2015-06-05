// Source : https://oj.leetcode.com/problems/container-with-most-water/
// Author : Dean Shi
// Date   : 2015-06-05

/**********************************************************************************
 *
 * Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai).
 * n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
 *
 * Find two lines, which together with x-axis forms a container, such that the container contains the most water.
 *
 * Note: You may not slant the container.
 *
 *
 **********************************************************************************/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max = 0;
    var left = 0;
    var right = height.length - 1;

    while (left < right) {
        var area = (height[left] < height[right] ? height[left] : height[right]) * (right - left);

        if (area > max) {
            max = area;
        }
        if (height[left] < height[right]) {
            do {
                ++left;
            } while (left < right && height[left - 1] >= height[left]);
        } else {
            do {
                --right;
            } while (left < right && height[right + 1] >= height[right]);
        }
    }
    return max;
};

console.log(maxArea([1, 1]) === 1); // true
