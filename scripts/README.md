# Comment & Readme Generator

The Node.js script is to generate:
  - comment header in your target source file 
  - a table row in your README.md

### Commands

1) Install Node packages
```
npm install
```

2) Add Leetcode url to the **FIRST** line of your source file. The format should be same as the following one:
```js
https://leetcode.com/problems/two-sum/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
};
```

3) Run the following command in your terminal
```
npm start
```
