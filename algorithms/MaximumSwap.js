// Source : https://leetcode.com/problems/maximum-swap
// Author : Dean Shi
// Date   : 2017-09-05

/***************************************************************************************
 *
 * Given a non-negative integer, you could swap two digits at most once to get the
 * maximum valued number. Return the maximum valued number you could get.
 *
 * Example 1:
 *
 * Input: 2736
 * Output: 7236
 * Explanation: Swap the number 2 and the number 7.
 *
 * Example 2:
 *
 * Input: 9973
 * Output: 9973
 * Explanation: No swap.
 *
 * Note:
 *
 * The given number is in the range [0, 108]
 *
 *
 ***************************************************************************************/

/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    const numArr = [...String(num)].map(ch => +ch)
    const sortedArr = numArr.slice().sort((a, b) => b - a)

    for (let i = 0; i < numArr.length; ++i) {
        if (numArr[i] !== sortedArr[i]) {
            const index = numArr.lastIndexOf(sortedArr[i]);
            [numArr[index], numArr[i]] = [numArr[i], sortedArr[i]]
            return +numArr.join('')
        }
    }
    return num
};
