// Source : https://oj.leetcode.com/problems/string-to-integer-atoi/
// Author : Dean Shi
// Date   : 2015-06-03

/**********************************************************************************
 *
 * Implement atoi to convert a string to an integer.
 *
 * Hint: Carefully consider all possible input cases. If you want a challenge,
 *       please do not see below and ask yourself what are the possible input cases.
 *
 * Notes:
 *   It is intended for this problem to be specified vaguely (ie, no given input specs).
 *   You are responsible to gather all the input requirements up front.
 *
 *
 * Requirements for atoi:
 *
 * The function first discards as many whitespace characters as necessary until the first
 * non-whitespace character is found. Then, starting from this character, takes an optional
 * initial plus or minus sign followed by as many numerical digits as possible, and interprets
 * them as a numerical value.
 *
 * The string can contain additional characters after those that form the integral number,
 * which are ignored and have no effect on the behavior of this function.
 *
 * If the first sequence of non-whitespace characters in str is not a valid integral number,
 * or if no such sequence exists because either str is empty or it contains only whitespace
 * characters, no conversion is performed.
 *
 * If no valid conversion could be performed, a zero value is returned. If the correct value
 * is out of the range of representable values, INT_MAX (2147483647) or INT_MIN (-2147483648)
 * is returned.
 *
 **********************************************************************************/

var myAtoi = function(str) {
    // Solution 1:
    // Runtime: 172 ms
    var result = [];

    for (var i = 0, l = str.length; i < l; ++i) {
        if (str[i] === ' ') {
            if (result.length) {
                break;
            }
        } else if (!isNaN(+str[i]) || str[i] === '-' || str[i] === '+') {
            result.push(str[i]);
        } else {
            break;
        }
    }
    return isNaN(result = +result.join('')) ? 0 : Math.max(Math.min(result, 2147483647), -2147483648);

    // Solution 2:
    // Runtime: 216 ms
    // var result = str.trim(), op = '';
    // if (result[0] === '-' || result[0] === '+') {
    //     op = result[0];
    //     result = result.substring(1);
    // }
    // result = result.match(/^\d+/i);
    // return (result && result[0]) ? Math.max(Math.min(+(op + result[0]),  2147483647), -2147483648) : 0;
};

// Test cases
console.log(myAtoi('123') === 123); // true
console.log(myAtoi('   123') === 123); // true
console.log(myAtoi('+123') === 123); // true
console.log(myAtoi(' -123') === -123); // true
console.log(myAtoi('123ABC') === 123); // true
console.log(myAtoi(' abc123ABC') === 0); // true
console.log(myAtoi('2147483648') === 2147483647); // true
console.log(myAtoi('-2147483649') === -2147483648); // true
