// Given an integer n, return any array containing n unique integers such that they add up to 0.

// Example 1:

// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

// Example 2:

// Input: n = 3
// Output: [-1,0,1]

// Example 3:

// Input: n = 1
// Output: [0]

// SOLUTION 1: PRETTY SLOW )=
// Refactoring for more speed tomorrow!

/**
 * @param {number} n
 * @return {number[]}
 */

 var sumZero = function(n) {
    let arr = [];
    let num;

    let isEven = n % 2 === 0 ? true : false;
    isEven ? num = 1 : num = 0;
    
    for ( let i = 0; i < n; i++ ) {
        if (isEven || i > 0) {
            if (num < 0) {
                arr.push(num);
                num = (num - 1) * -1;
            } 
            
            else {
                arr.push(num);
                num = num * -1;
            }
        }
        
        else {
            arr.push(num);
            num += 1;
        }
    }
    
    return arr;
};


// Runtime: 108 ms, faster than 27.81% of JavaScript online submissions for Find N Unique Integers Sum up to Zero.
// Memory Usage: 42.8 MB, less than 22.30% of JavaScript online submissions for Find N Unique Integers Sum up to Zero.