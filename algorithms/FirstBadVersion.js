// Source : https://leetcode.com/problems/first-bad-version
// Author : Dean Shi
// Date   : 2017-10-20

/***************************************************************************************
 *
 * You are a product manager and currently leading a team to develop a new product.
 * Unfortunately, the latest version of your product fails the quality check. Since
 * each version is developed based on the previous version, all the versions after a
 * bad version are also bad.
 *
 * Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad
 * one, which causes all the following ones to be bad.
 *
 * You are given an API bool isBadVersion(version) which will return whether version is
 * bad. Implement a function to find the first bad version. You should minimize the
 * number of calls to the API.
 *
 * Credits:Special thanks to @jianchao.li.fighter for adding this problem and creating
 * all test cases.
 *
 ***************************************************************************************/

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * Iteration
 *
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let [start, end, mid] = [1, n]

        while (start < end) {
            mid = ~~((start + end) / 2)
            if (isBadVersion(mid)) {
                end = mid
            } else {
                start = mid + 1
            }
        }
        return start
    };
};

/**
 * Recursion
 *
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        return helper(1, n)
    };

    function helper(start, end) {
        if (start === end) return start

        const mid = ~~((start + end) / 2)
        return isBadVersion(mid) ? helper(start, mid) : helper(mid + 1, end)
    }
};
