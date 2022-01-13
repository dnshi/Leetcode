// Source : https://leetcode.com/problems/bulls-and-cows
// Author : Dean Shi
// Date   : 2022-01-13

/***************************************************************************************
 * You are playing the Bulls and Cows game with your friend.
 * 
 * You write down a secret number and ask your friend to guess what the number is. When
 * your friend makes a guess, you provide a hint with the following info:
 * 
 * The number of "bulls", which are digits in the guess that are in the correct
 * position.
 * The number of "cows", which are digits in the guess that are in your secret number
 * but are located in the wrong position. Specifically, the non-bull digits in the
 * guess that could be rearranged such that they become bulls.
 * 
 * Given the secret number secret and your friend's guess guess, return the hint for
 * your friend's guess.
 * 
 * The hint should be formatted as "xAyB", where x is the number of bulls and y is the
 * number of cows. Note that both secret and guess may contain duplicate digits.
 * 
 * Example 1:
 * 
 * Input: secret = "1807", guess = "7810"
 * Output: "1A3B"
 * Explanation: Bulls are connected with a '|' and cows are underlined:
 * "1807"
 * |
 * "7810"
 * 
 * Example 2:
 * 
 * Input: secret = "1123", guess = "0111"
 * Output: "1A1B"
 * Explanation: Bulls are connected with a '|' and cows are underlined:
 * "1123"        "1123"
 * |      or     |
 * "0111"        "0111"
 * Note that only one of the two unmatched 1s is counted as a cow since the non-bull
 * digits can only be rearranged to allow one 1 to be a bull.
 * 
 * Constraints:
 * 
 * 1 <= secret.length, guess.length <= 1000
 * secret.length == guess.length
 * secret and guess consist of digits only.
 * 
 * 
 ***************************************************************************************/

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    const [secretArr, guessArr, ACount] = getA([...secret], [...guess])
    const BCount = getB(secretArr, guessArr)

    return `${ACount}A${BCount}B`
};

function getA(secretArr, guessArr) {
    let count = 0
    const filteredSecretArr = []
    const filteredGuessArr = []
    for (let i = 0; i < secretArr.length; i++) {
        if (secretArr[i] !== guessArr[i]) {
            filteredSecretArr.push(secretArr[i])
            filteredGuessArr.push(guessArr[i])
        } else {
            count += 1
        }
    }

    return [filteredSecretArr, filteredGuessArr, count]
}

function getB(secretArr, guessArr) {
    let count = 0
    const secretMap = secretArr.reduce((map, ch) => {
        map[ch] = (map[ch] || 0) + 1
        return map
    }, {})

    guessArr.forEach((ch) => {
        if (secretMap[ch]) {
            secretMap[ch] -= 1
            count += 1
        }
    })

    return count
}
