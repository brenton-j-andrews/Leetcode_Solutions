// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"
// Output: 0

// Example 2:

// Input: s = "loveleetcode"
// Output: 2

// Example 3:

// Input: s = "aabb"
// Output: -1


/**
 * @param {string} s
 * @return {number}
 */

 var firstUniqChar = function(s) {
    let one = new Set();
    let two = new Set();
    
    function difference(setA, setB) {
        const _difference = new Set(setA);
        for (const elem of setB) {
            if (_difference.has(elem)) {
                _difference.delete(elem);
            } else {
                _difference.add(elem);
            }
        }
        
        return _difference;
    }
    
    // Iterr over string, adding duplicates to set two.
    for (let i = 0; i < s.length; i++ ) {
        if (!one.has(s.charAt(i))) {
            one.add(s.charAt(i));
        } else {
            two.add(s.charAt(i));
        }
    }
    
    // difference(one, two) returns set of non duplicate characters. Convert to array and get 0th index for first non duplicate.
    let uniqueChar = Array.from(difference(one, two))[0];
    
    return s.indexOf(uniqueChar);
};

// Runtime: 138 ms, faster than 67.49% of JavaScript online submissions for First Unique Character in a String.
// Memory Usage: 45.3 MB, less than 63.33% of JavaScript online submissions for First Unique Character in a String.