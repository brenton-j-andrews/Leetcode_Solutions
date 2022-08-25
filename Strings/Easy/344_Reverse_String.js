// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// SOLUTION 1: PRETTY SLOW, GUNNA TAKE A LOOK AT FASTER SOLUTIONS...

 var reverseString = function(s) {
    let i = 0;
    let j = s.length - 1;
    
    while ( i < j ) {
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        
        i++;
        j--;
    }
};

// Runtime: 173 ms, faster than 17.75% of JavaScript online submissions for Reverse String.
// Memory Usage: 48.9 MB, less than 91.30% of JavaScript online submissions for Reverse String.