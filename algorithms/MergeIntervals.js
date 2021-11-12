// Source : https://leetcode.com/problems/merge-intervals
// Author : Dean Shi
// Date   : 2021-11-12

/***************************************************************************************
 * Given an array of intervals where intervals[i] = [starti, endi], merge all
 * overlapping intervals, and return an array of the non-overlapping intervals that
 * cover all the intervals in the input.
 *
 * Example 1:
 *
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 *
 * Example 2:
 *
 * Input: intervals = [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 *
 * Constraints:
 *
 * 1 <= intervals.length <= 104
 * intervals[i].length == 2
 * 0 <= starti <= endi <= 104
 *
 *
 ***************************************************************************************/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const sortedIntervals = intervals
        .slice()
        .sort((a, b) => a[0] - b[0])

    const result = [sortedIntervals[0]]
    for (let i = 1; i < sortedIntervals.length; i++) {
        const mergedInterval = result[result.length - 1]
        const prevEnd = mergedInterval[1]
        const [currStart, currEnd] = sortedIntervals[i]

        if (prevEnd >= currStart) {
            mergedInterval[1] = Math.max(prevEnd, currEnd)
        } else {
            result.push(sortedIntervals[i])
        }
    }
    return result
};
