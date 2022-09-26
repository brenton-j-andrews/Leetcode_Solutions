// A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

// You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).

// Return the number of indices where heights[i] != expected[i].

// Example 1:

// Input: heights = [1,1,4,2,1,3]
// Output: 3
// Explanation: 
// heights:  [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]
// Indices 2, 4, and 5 do not match.


/**
 * @param {number[]} heights
 * @return {number}
 */

// SOLUTION: 
// 1. Copy heights array as expected.
// 2. Sort expected array via bubble sort.
// 3. Compare values between arrays at index, increment counter if false.
// 4. Return counter value. 

 var heightChecker = function(heights) {
    
    let expected = heights.map((x) => x);
    
    // Sort expected array with bubble sort.
    for (let i = 0; i < expected.length; i++) {
        for (let j = 0; j < expected.length - 1 - i; j++) {
            if (expected[j] > expected[j + 1]) {
                let temp = expected[j + 1];
                expected[j + 1] = expected[j];
                expected[j] = temp;
            }
        }
    }
    
    let counter = 0;
    
    heights.forEach((elem, index) => {
        if (elem != expected[index]) {
            counter++;
        }
    })
    
    return counter;
};

// Runtime: 63 ms, faster than 95.37% (!!!) of JavaScript online submissions for Height Checker.
// Memory Usage: 42.5 MB, less than 23.06% of JavaScript online submissions for Height Checker.