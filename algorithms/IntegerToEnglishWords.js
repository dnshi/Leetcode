// Source : https://leetcode.com/problems/integer-to-english-words
// Author : Dean Shi
// Date   : 2017-10-11

/***************************************************************************************
 *
 * Convert a non-negative integer to its english words representation. Given input is
 * guaranteed to be less than 231 - 1.
 *
 * For example,
 * 123 -> "One Hundred Twenty Three"
 * 12345 -> "Twelve Thousand Three Hundred Forty Five"
 * 1234567 -> "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
 *
 ***************************************************************************************/

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    if (num === 0) return 'Zero'

    const belowTweenty = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
                      'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen',
                      'Seventeen', 'Eighteen', 'Nineteen']
    const belowHundred = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
    const suffixMap = ['', 'Thousand', 'Million', 'Billion']

    const result = []
    let words

    while (num !== 0) {
        words = convert(num % 1000, suffixMap.shift())
        num = ~~(num / 1000)

        if (words) result.unshift(words)
    }
    return result.join(' ')

    function convert(num, suffix) {
        let strArr = []
        if (num >= 100) {
            strArr.push(belowTweenty[~~(num / 100)], 'Hundred')
            num %= 100
        }
        if (num >= 20) {
            strArr.push(belowHundred[~~(num / 10)])
            num %= 10
        }
        if (belowTweenty[num]) {
            strArr.push(belowTweenty[num])
        }
        if (suffix && strArr.length) {
            strArr.push(suffix)
        }
        return strArr.join(' ')
    }
};
