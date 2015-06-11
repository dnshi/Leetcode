// Source : https://oj.leetcode.com/problems/roman-to-integer/
// Author : Dean Shi
// Date   : 2015-06-10

/**********************************************************************************
 *
 * Given a roman numeral, convert it to an integer.
 *
 * Input is guaranteed to be within the range from 1 to 3999.
 *
 **********************************************************************************/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var romanTable = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1
    };

    var result, prev, curr;
    result = prev = romanTable[s[0]];

    for (var i = 1, l = s.length; i < l; ++i) {
        curr = romanTable[s[i]];
        result += curr - (prev < curr ? prev * 2 : 0);
        prev = curr;
    }

    return result;
};

// Test case
console.log(romanToInt('CMXCIX') === 999); // true
