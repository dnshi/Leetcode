// Source : https://leetcode.com/problems/k-diff-pairs-in-an-array/?tab=Description
// Author : Dean Shi
// Date   : 2017-03-10

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    if (k < 0) return 0

    const numsSet = new Set()
    const data = new Set(nums)
    let count = 0

    nums.forEach((n) => {
        if (numsSet.has(n)) return

        if (k !== 0) {
            if (data.has(k + n) && !numsSet.has(k + n)) {
                count++
            }
            if (data.has(n - k) && !numsSet.has(n - k)) {
                count++
            }
        } else {
            if (nums.indexOf(n) !== nums.lastIndexOf(n)) {
                count++;
            }
        }
        numsSet.add(n)
    })

    return count
};
