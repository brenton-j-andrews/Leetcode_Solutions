// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.


/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    // Calc sum of 0 to n.
    let n = nums.length;
    let n_sum = 0;
    let total_sum = 0;
    
    for (let i = 0; i < n + 1; i++) {
        if (i < n) {
            n_sum += nums[i];
            total_sum += i;
        }
        else {
            total_sum += i;
        }  
    }

    return (total_sum - n_sum);
};




// Runtime: 120 ms, faster than 39.63% of JavaScript online submissions for Missing Number.
// Memory Usage: 43.8 MB, less than 94.41% of JavaScript online submissions for Missing Number.