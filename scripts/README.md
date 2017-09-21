### Script

The `index.js` is Node.js script to generate comment into your target source file and row into your README.md

1) Install Node packages
```
npm install
```

2) Add url on the **FIRST** line in your target source file
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
