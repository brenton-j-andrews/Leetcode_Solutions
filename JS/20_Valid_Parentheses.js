// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

/**
 * @param {string} s
 * @return {boolean}
 */

 var isValid = function(s) {
    let stack = [];
    for (let x of s) {
        
        // Openning character
        if (x === "(" || x === "{" || x === "[") {
            stack.push(x);
        }
        
        // Closing character
        else {
            let lastInArr = stack[stack.length - 1];
            
            if (x === ")" && lastInArr === "(") {
                stack.pop();
            } 
        
            else if (x === "]" && lastInArr === "[") {
                stack.pop();
            } 
        
            else if (x === "}" && lastInArr === "{") {
                stack.pop();
            } 
            
            else {
                return false;
            }
        }
    }
    
    return (stack.length == 0);
};