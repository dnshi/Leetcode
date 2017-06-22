// Source : https://leetcode.com/problems/fizz-buzz
// Author : Dean Shi
// Date   : 2017-06-21

/***************************************************************************************
 *
 * Write a program that outputs the string representation of numbers from 1 to n.
 *
 * But for multiples of three it should output “Fizz” instead of the number and for the
 * multiples of five output “Buzz”. For numbers which are multiples of both three and
 * five output “FizzBuzz”.
 *
 * Example:
 *
 * n = 15,
 *
 * Return:
 * [
 *     "1",
 *     "2",
 *     "Fizz",
 *     "4",
 *     "Buzz",
 *     "Fizz",
 *     "7",
 *     "8",
 *     "Fizz",
 *     "Buzz",
 *     "11",
 *     "Fizz",
 *     "13",
 *     "14",
 *     "FizzBuzz"
 * ]
 *
 *
 ***************************************************************************************/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const result = []
    for (let str, i = 1; i <= n; i++) {
        str = ''
        if (i % 3 === 0) str += 'Fizz'
        if (i % 5 === 0) str += 'Buzz'
        if (str === '') str += `${i}`

        result.push(str)
    }
    return result
};
