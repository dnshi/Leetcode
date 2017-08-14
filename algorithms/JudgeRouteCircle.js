// Source : https://leetcode.com/problems/judge-route-circle
// Author : Dean Shi
// Date   : 2017-08-14

/***************************************************************************************
 *
 * Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge
 * if this robot makes a circle, which means it moves back to the original place.
 *
 * The move sequence is represented by a string. And each move is represent by a
 * character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The
 * output should be true or false representing whether the robot makes a circle.
 *
 * Example 1:
 *
 * Input: "UD"
 * Output: true
 *
 * Example 2:
 *
 * Input: "LL"
 * Output: false
 *
 *
 ***************************************************************************************/

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let [h, v] = [0, 0]

    for (let ch of moves) {
        switch (ch) {
            case 'U': ++h; break;
            case 'D': --h; break;
            case 'L': ++v; break;
            case 'R': --v; break;
        }
    }

    return h === 0 && v === 0
};
