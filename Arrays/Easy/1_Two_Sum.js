// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// O(n^2) solution -> Better way? 

var twoSum = function(nums, target) {
    let solution_arr = [];
    for(let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && i != j) {
                solution_arr.push(i, j);
                return solution_arr;
            }
        }
    }
};