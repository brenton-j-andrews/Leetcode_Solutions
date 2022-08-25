// You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.


// Example 1:

// Input: s = "abbaca"
// Output: "ca"
// Explanation: 
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".


// Solution 1 attempted recursively, used too much memory for larger inputs.

// Solution 2 used a stack array. Much better!

/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicates = function(s) {
    
    let s_arr = Array.from(s);
    let stack_arr = [];
    let i = 0;

    
    s_arr.forEach((char) => {
        let last = stack_arr[stack_arr.length - 1];
        
        if (i === 0) {
            stack_arr.push(char);
            i++;
        }
        
        else if (char === stack_arr[stack_arr.length - 1]) {
            stack_arr.pop();
            i--;
        }
        
        else {
            stack_arr.push(char);
            i++;
        }
    })    
    
    return stack_arr.join("");
};

// Runtime: 94 ms, faster than 87.22% of JavaScript online submissions for Remove All Adjacent Duplicates In String.
// Memory Usage: 50.7 MB, less than 92.98% of JavaScript online submissions for Remove All Adjacent Duplicates In String.