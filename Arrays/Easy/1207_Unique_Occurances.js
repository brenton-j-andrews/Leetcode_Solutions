// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.

/**
 * @param {number[]} arr
 * @return {boolean}
 */


// BETTER ANSWER AFTER LEARNING ABOUT JS SET OBJECTS!!!
var uniqueOccurrences = function(arr) {

    let count = {};
    let key;
    
    arr.forEach(element => {
        key = element.toString();
        count[key] = (count[key] || 0) + 1;
    })
    
    let values = Object.values(count);


    return values.length === new Set(values).size;
}

// Runtime: 103 ms, faster than 29.34% of JavaScript online submissions for Unique Number of Occurrences.
// Memory Usage: 42.5 MB, less than 77.05% of JavaScript online submissions for Unique Number of Occurrences.

// SLOW ANSWER!!!
 var uniqueOccurrences = function(arr) {
    let answer = true;
    let count = {};
    let key;
    
    arr.forEach(element => {
        key = element.toString();
        count[key] = (count[key] || 0) + 1;
    })
    
    let values = Object.values(count);
    let copy = [];
    
    values.forEach(value => {
        if (copy.includes(value)) {
            answer = false;
        } else {
            copy.push(value);
        }
    })
    
    return answer;
}

// Runtime: 116 ms, faster than 15.12% of JavaScript online submissions for Unique Number of Occurrences.
// Memory Usage: 42.8 MB, less than 54.37% of JavaScript online submissions for Unique Number of Occurrences.

// This answer isn't very well done, while checking out better answers I learned about JS Set objects! They seem really useful for this type of problem, time to practice!