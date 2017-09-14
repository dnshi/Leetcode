// Source : https://leetcode.com/problems/compare-version-numbers
// Author : Dean Shi
// Date   : 2017-09-14

/***************************************************************************************
 *
 * Compare two version numbers version1 and version2.
 * If version1 > version2 return 1, if version1 < version2 return -1, otherwise return
 * 0.
 *
 * You may assume that the version strings are non-empty and contain only digits and
 * the . character.
 * The . character does not represent a decimal point and is used to separate number
 * sequences.
 * For instance, 2.5 is not "two and a half" or "half way to version three", it is the
 * fifth second-level revision of the second first-level revision.
 *
 * Here is an example of version numbers ordering:
 * 0.1 < 1.1 < 1.2 < 13.37
 *
 * Credits:Special thanks to @ts for adding this problem and creating all test cases.
 *
 *
 ***************************************************************************************/

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const v1 = version1.split('.')
    const v2 = version2.split('.')

    const len = Math.max(v1.length, v2.length)

    for (let val1, val2, i = 0; i < len; ++i) {
        val1 = +(v1[i] || 0)
        val2 = +(v2[i] || 0)
        if (val1 < val2) return -1
        if (val1 > val2) return 1
    }
    return 0
};
