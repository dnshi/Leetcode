// Source : https://leetcode.com/problems/interval-list-intersections
// Author : Dean Shi
// Date   : 2022-01-07

/***************************************************************************************
 * You are given two lists of closed intervals, firstList and secondList, where
 * firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list of
 * intervals is pairwise disjoint and in sorted order.
 * 
 * Return the intersection of these two interval lists.
 * 
 * A closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x
 * <= b.
 * 
 * The intersection of two closed intervals is a set of real numbers that are either
 * empty or represented as a closed interval. For example, the intersection of [1, 3]
 * and [2, 4] is [2, 3].
 * 
 * Example 1:
 * 
 * Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24]
 * ,[25,26]]
 * Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
 * 
 * Example 2:
 * 
 * Input: firstList = [[1,3],[5,9]], secondList = []
 * Output: []
 * 
 * Constraints:
 * 
 * 0 <= firstList.length, secondList.length <= 1000
 * firstList.length + secondList.length >= 1
 * 0 <= starti < endi <= 109
 * endi < starti+1
 * 0 <= startj < endj <= 109
 * endj < startj+1
 * 
 * 
 ***************************************************************************************/

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    const result = []
    let firstPt = 0
    let secondPt = 0
    let firstItem = firstList[firstPt]
    let secondItem = secondList[secondPt]
    while (firstItem && secondItem) {
        let openingPoint = Math.max(firstItem[0], secondItem[0])
        let closedPoint = Math.min(firstItem[1], secondItem[1])

        if (closedPoint >= openingPoint) {
            result.push([openingPoint, closedPoint])
        }

        if (firstItem[1] > secondItem[1]) {
            secondItem = secondList[++secondPt]
        } else if (firstItem[1] < secondItem[1]) {
            firstItem = firstList[++firstPt]
        } else {
            firstItem = firstList[++firstPt]
            secondItem = secondList[++secondPt]
        }
    }
    return result
};
