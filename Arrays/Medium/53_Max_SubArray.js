// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

/**
 * @param {number[]} nums
 * @return {number}
 */

 var maxSubArray = function(nums) {
    let maxSubArr = nums[0];
    let currentSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (currentSum < 0) {
            currentSum = 0;
        }
        
        currentSum += nums[i];
        maxSubArr = Math.max(maxSubArr, currentSum);
    }
    
    return maxSubArr;
};