// Source : https://leetcode.com/problems/number-of-segments-in-a-string
// Author : Dean Shi
// Date   : 2017-03-31

/***************************************************************************************
 *
 * Count the number of segments in a string, where a segment is defined to be a
 * contiguous sequence of non-space characters.
 *
 * Please note that the string does not contain any non-printable characters.
 *
 * Example:
 *
 * Input: "Hello, my name is John"
 * Output: 5
 *
 *
 ***************************************************************************************/

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    s = s.trim()
    if (s.length === 0) return 0

    return s.split(/ +/).length
};
