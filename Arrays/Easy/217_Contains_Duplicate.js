// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */

 var containsDuplicate = function(nums) {
    let unique_nums = [];
    for (let i = 0; i < nums.length; i++) {
        if (unique_nums.includes(nums[i]))
            return true;
        unique_nums.push(nums[i])
    }
    
    return false;
};