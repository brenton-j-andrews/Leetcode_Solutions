// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

// Example 1:

// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

// Example 2:

// Input: nums = [0]
// Output: [0]
 
// Constraints:

//     1 <= nums.length <= 5000
//     0 <= nums[i] <= 5000


/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Solution 1: Probably not in the spirt of the question since I avoided doing any real sorting, but it works and was really easy to implement / understand!

 var sortArrayByParity = function(nums) {
    let even = [];
    let odd = [];
    
    nums.forEach((number) => {
        number % 2 === 0 ? even.push(number) : odd.push(number);
    })
    
    return even.concat(odd);
};

// Runtime: 141 ms, faster than 24.71% of JavaScript online submissions for Sort Array By Parity.
// Memory Usage: 44.3 MB, less than 82.71% of JavaScript online submissions for Sort Array By Parity.


// Solution 2: using bubble sort with parity as condition instead of int value.


