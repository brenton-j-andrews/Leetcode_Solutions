// You are given a non-negative integer array nums. In one operation, you must:

//     Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.
//     Subtract x from every positive element in nums.

// Return the minimum number of operations to make every element in nums equal to 0.

 

// Example 1:

// Input: nums = [1,5,0,3,5]
// Output: 3
// Explanation:
// In the first operation, choose x = 1. Now, nums = [0,4,0,2,4].
// In the second operation, choose x = 2. Now, nums = [0,2,0,0,2].
// In the third operation, choose x = 2. Now, nums = [0,0,0,0,0].


 /**
 * @param {number[]} nums
 * @return {number}
 */

 var minimumOperations = function(nums) {
    let operations = 0;
    let completed = false;
    
    while (!completed) {
        let smallest = 1000;
        
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < smallest && nums[i] > 0) {
                smallest = nums[i];
            }
        }
        
         if (smallest === 1000) {
            completed = true;
            break;
        }
        
         for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) {
                nums[i] -= smallest;
            }
        }

        operations++;
    }
    
    return operations;
};

// Runtime: 101 ms, faster than 39.12% of JavaScript online submissions for Make Array Zero by Subtracting Equal Amounts.
// Memory Usage: 41.9 MB, less than 86.63% of JavaScript online submissions for Make Array Zero by Subtracting Equal Amounts.