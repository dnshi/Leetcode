// Source : https://oj.leetcode.com/problems/palindrome-number/
// Author : Dean Shi
// Date   : 2015-06-03

/**********************************************************************************
 *
 * Determine whether an integer is a palindrome. Do this without extra space.
 *
 *
 * Some hints:
 *
 * Could negative integers be palindromes? (ie, -1)
 *
 * If you are thinking of converting the integer to string, note the restriction of using extra space.
 *
 * You could also try reversing an integer. However, if you have solved the problem "Reverse Integer",
 * you know that the reversed integer might overflow. How would you handle such case?
 *
 * There is a more generic way of solving this problem.
 *
 *
 **********************************************************************************/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // Solution 1:
    // Runtime: 576 ms
    var str = x + '';
    for (var right, left = 0, l = str.length - 1; left < (right = l - left); ++left) {
        if (str[left] !== str[right]) {
            return false;
        }
    }
    return true;

    // Solution 2:
    // Runtime: 728 ms
    // return (x + '').split('').reverse().join('') === (x + '');
};

// Test cases
console.log(isPalindrome(0)); // true
console.log(isPalindrome(-1)); // false
console.log(isPalindrome(1001)); // true
console.log(isPalindrome(1101)); // false
