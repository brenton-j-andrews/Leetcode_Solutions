// You are given a 0-indexed integer array nums, where nums[i] is a digit between 0 and 9 (inclusive).

// The triangular sum of nums is the value of the only element present in nums after the following process terminates:

// Let nums comprise of n elements. If n == 1, end the process. Otherwise, create a new 0-indexed integer array newNums of length n - 1.
// For each index i, where 0 <= i < n - 1, assign the value of newNums[i] as (nums[i] + nums[i+1]) % 10, where % denotes modulo operator.
// Replace the array nums with newNums.
// Repeat the entire process starting from step 1.
// Return the triangular sum of nums.

/**
 * @param {number[]} nums
 * @return {number}
 */

var triangularSum = function(nums) {
    
    while ( nums.length > 1) {
        let newNums = [];
        let newNumsLen = nums.length - 1;
        
        for (let i = 0; i < nums.length - 1; i++) {
            let newInt = (nums[i] + nums[i+1]) % 10;
            newNums.push(newInt);
        }
        
        nums = newNums;
    }
    
    return nums;
};

// Runtime: 214 ms, faster than 75.29% of JavaScript online submissions for Find Triangular Sum of an Array.
// Memory Usage: 49 MB, less than 34.97% of JavaScript online submissions for Find Triangular Sum of an Array.
