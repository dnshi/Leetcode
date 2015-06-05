// Source : https://oj.leetcode.com/problems/zigzag-conversion/
// Author : Dean Shi
// Date   : 2015-06-04

/**********************************************************************************
 *
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
 * (you may want to display this pattern in a fixed font for better legibility)
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 *
 * And then read line by line: "PAHNAPLSIIGYIR"
 *
 * Write the code that will take a string and make this conversion given a number of rows:
 *
 * string convert(string text, int nRows);
 *
 * convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
 *
 *
 **********************************************************************************/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// Solution 1:
// Runtime: 196 ms
var convert = function(s, numRows) {
    if (numRows === 1 || numRows > s.length) {
        return s;
    }

    var arr = [];
    for (var step, i = 0, l = s.length, row = 0, n = numRows - 1; i < l; ++i) {
        if (row === n) {
            step = -1;
        } else if (row === 0) {
            step = 1;
        }

        arr[row] = (arr[row] || '') + s[i];
        row += step;
    }

    return arr.join('');
};

console.log(convert('PAYPALISHIRING', 3) === 'PAHNAPLSIIGYIR'); // true

// Solution 2:
// Note: Initial solution. It works but looks ugly.
// Runtime: 196 ms
//
// var convert = function(s, numRows) {
//     if (numRows === 1 || numRows > s.length) {
//         return s;
//     }
//     var result = '';
//     var arr = [];
//     var count = 0;
//     var row = 0;
//     var reverse = false;
//     var n = numRows - 1;
//
//     for (var i = 0; i < numRows; ++i) {
//         arr.push([]);
//     }
//     while (count < s.length) {
//         arr[row].push(s[count]);
//         if (!reverse) {
//             if (row === n) {
//                 reverse = true;
//                 --row;
//             } else {
//                 ++row;
//             }
//         } else {
//             if (row === 0) {
//                 reverse = false;
//                 ++row;
//             } else {
//                 --row;
//             }
//         }
//         ++count;
//     }
//
//     for (var i = 0; i < numRows; ++i) {
//         result += arr[i].join('');
//     }
//     return result;
// };
