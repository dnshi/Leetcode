// Source : https://leetcode.com/problems/remove-covered-intervals
// Author : Dean Shi
// Date   : 2022-01-07

/***************************************************************************************
 * Given an array intervals where intervals[i] = [li, ri] represent the interval [li,
 * ri), remove all intervals that are covered by another interval in the list.
 * 
 * The interval [a, b) is covered by the interval [c, d) if and only if c <= a and b <=
 * d.
 * 
 * Return the number of remaining intervals.
 * 
 * Example 1:
 * 
 * Input: intervals = [[1,4],[3,6],[2,8]]
 * Output: 2
 * Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.
 * 
 * Example 2:
 * 
 * Input: intervals = [[1,4],[2,3]]
 * Output: 1
 * 
 * Constraints:
 * 
 * 1 <= intervals.length <= 1000
 * intervals[i].length == 2
 * 0 <= li <= ri <= 105
 * All the given intervals are unique.
 * 
 * 
 ***************************************************************************************/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])

    let count = intervals.length
    let prevInterval = intervals[0]

    for (let i = 1; i < intervals.length; i++) {
        const currInterval = intervals[i]
        if (prevInterval[1] >= currInterval[1]) {
            count -= 1
            continue
        } else if (
            prevInterval[1] < currInterval[1] &&
            prevInterval[0] === currInterval[0]
        ) {
            count -= 1
        }
        prevInterval = currInterval
    }
    return count
};
