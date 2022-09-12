// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

/**
 * @param {string} s
 * @return {boolean}
 */

 var isPalindrome = function(s) {
    
    // Step 1: sanitize input. Didn't write Regex myself tbh.
    let regex = /[^A-Za-z0-9]/g;
    let sanitizedInput = s.replace(regex, "").toLowerCase();
    
    // Step 2: see if it is a palindrome!
    let i = 0;
    let j = sanitizedInput.length - 1;
    let isPalindrome = true;
    
    while (i < j) {
        if (sanitizedInput.charAt(i) != sanitizedInput.charAt(j)) {
            isPalindrome = false;
            break;
        }
        
        else {
            i++;
            j--;
        }
    }
    
    return isPalindrome;
};

// Runtime: 98 ms, faster than 68.44% of JavaScript online submissions for Valid Palindrome.
// Memory Usage: 44.2 MB, less than 87.22% of JavaScript online submissions for Valid Palindrome.
