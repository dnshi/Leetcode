// Source : https://leetcode.com/problems/implement-magic-dictionary
// Author : Dean Shi
// Date   : 2017-09-24

/***************************************************************************************
 * 
 * Implement a magic directory with buildDict, and search methods
 * 
 * For the method buildDict, you'll be given a list of non-repetitive words to build a
 * dictionary
 * 
 * For the method search, you'll be given a word, and judge whether if you modify
 * exactly one character into another character in this word, the modified word is in
 * the dictionary you just built
 * 
 * Example 1
 * Input: buildDict(["hello", "leetcode"]), Output: Null
 * Input: search("hello"), Output: False
 * Input: search("hhllo"), Output: True
 * Input: search("hell"), Output: False
 * Input: search("leetcoded"), Output: False
 * 
 * Note
 * 
 * You may assume that all the inputs are consist of lowercase letters a-z
 * For contest purpose, the test data is rather small by now. You could think about
 * highly efficient algorithm after the contest
 * Please remember to RESET your class variables declared in class MagicDictionary, as
 * static/class variables are persisted across multiple test cases. Please see here for
 * more details
 * 
 ***************************************************************************************/

/**
 * Initialize your data structure here.
 */
var MagicDictionary = function() {
    this.table = {}
};

/**
 * Build a dictionary through a list of words
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dict) {
    for (let word of dict) {
        this.table[word.length] = (this.table[word.length] || []).concat(word)
    }
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(word) {
    return !!this.table[word.length] && this.table[word.length].some((w) => {
        let isModified = false

        for (let i = 0; i < word.length; ++i) {
            if (word[i] !== w[i]) {
                if (isModified) {
                    return false
                } else {
                    isModified = true
                }
            }
        }
        return isModified
    })
};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = Object.create(MagicDictionary).createNew()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */
