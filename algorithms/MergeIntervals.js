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

    const result = []
    let mergedInterval = sortedIntervals
    for (let i = 1; i < sortedIntervals.length; i++) {
        const [prevStart, prevEnd] = mergedInterval
        const [currStart, currEnd] = sortedIntervals[i]

        if (prevStart <= currStart && prevEnd >= currStart) {
            mergedInterval = [prevStart, prevEnd > currEnd ? prevEnd : currEnd]
        } else {
            result.push(mergedInterval)
            mergedInterval = sortedIntervals[i]
        }
    }
    result.push(mergedInterval)
    return result
};
