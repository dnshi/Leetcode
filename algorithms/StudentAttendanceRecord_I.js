// Source : https://leetcode.com/problems/student-attendance-record-i
// Author : Dean Shi
// Date   : 2017-04-17

/***************************************************************************************
 *
 * You are given a string representing an attendance record for a student. The record
 * only contains the following three characters:
 *
 * 'A' : Absent.
 * 'L' : Late.
 *  'P' : Present.
 *
 * A student could be rewarded if his attendance record doesn't contain more than one
 * 'A' (absent) or more than two continuous 'L' (late).
 *
 * You need to return whether the student could be rewarded according to his attendance
 * record.
 *
 * Example 1:
 *
 * Input: "PPALLP"
 * Output: True
 *
 * Example 2:
 *
 * Input: "PPALLL"
 * Output: False
 *
 *
 ***************************************************************************************/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    return s.split('A').length <= 2 && s.indexOf('LLL') === -1
};
