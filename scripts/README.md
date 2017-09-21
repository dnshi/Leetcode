# Comment & Readme Generator

The `index.js` is Node.js script to generate 
  - comment in your target source file 
  - table row in your README.md

### Commands

1) Install Node packages
```
npm install
```

2) Add url to the **FIRST** line in your target source file
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

3) Run command in your terminal
```
node ./script ./algorithms/TwoSum.js
```
