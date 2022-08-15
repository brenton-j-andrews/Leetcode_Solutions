// There is a function signFunc(x) that returns:

//     1 if x is positive.
//     -1 if x is negative.
//     0 if x is equal to 0.

// You are given an integer array nums. Let product be the product of all values in the array nums.

// Return signFunc(product).

// Example 1:

// Input: nums = [-1,-2,-3,-4,3,2,1]
// Output: 1
// Explanation: The product of all values in the array is 144, and signFunc(144) = 1


/**
 * @param {number[]} nums
 * @return {number}
 */

// First attempt failed due to too large of a product -> returned NaN value!

 var arraySign = function(nums) {
    let product = 1;
    let isZero = false;
    
    nums.forEach(number => {
        if (number === 0) {
            isZero = true;
        }
        product = product * number;
    })

    if (isZero) {
        return 0;
    }
    let x = product > 0 ? 1: -1;
    return x;
};

// Runtime: 82 ms, faster than 67.31% of JavaScript online submissions for Sign of the Product of an Array.
// Memory Usage: 43.8 MB, less than 46.58% of JavaScript online submissions for Sign of the Product of an Array.