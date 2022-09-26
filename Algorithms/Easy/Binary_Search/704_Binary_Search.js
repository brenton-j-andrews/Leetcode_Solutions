// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Warm up: Linear search with O(n) time complexity, not the actual answer!

 var search = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }
    
    return -1;
};

// SOLUTION 1: Binary search with O(log n) time complexity.

var search = function(nums, target) {
    
    let lo = 0;
    let hi = nums.length;
    let index = -1; 
    
    do {
        let mid = Math.floor(lo + (hi - lo) / 2);
        let val = nums[mid];
        
        if (val === target) {
            index = mid;
            break;
        }
        
        else if (val < target) {
            lo = mid + 1;
        }
        
        else {
            hi = mid;
        }
        
    } while (lo < hi);
    
    
    return index;
};

// Runtime: 104 ms, faster than 42.48% of JavaScript online submissions for Binary Search.
// Memory Usage: 45.2 MB, less than 43.64% of JavaScript online submissions for Binary Search.
