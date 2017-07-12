// Source : https://leetcode.com/problems/pascals-triangle-ii
// Author : Dean Shi
// Date   : 2017-07-12

/***************************************************************************************
 *
 * Given an index k, return the kth row of the Pascal's triangle.
 *
 * For example, given k = 3,
 * Return [1,3,3,1].
 *
 * Note:
 * Could you optimize your algorithm to use only O(k) extra space?
 *
 *
 ***************************************************************************************/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const result = []

    for (let i = 0; i <= rowIndex; ++i) {
        result.push(1)
        for (let j = i - 1; j > 0; --j) {
            result[j] = result[j - 1] + result[j]
        }
    }
    return result
};
