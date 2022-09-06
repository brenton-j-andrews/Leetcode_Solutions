// There are n buildings in a line. You are given an integer array heights of size n that represents the heights of the buildings in the line.

// The ocean is to the right of the buildings. A building has an ocean view if the building can see the ocean without obstructions. Formally, a building has an ocean view if all the buildings to its right have a smaller height.

// Return a list of indices (0-indexed) of buildings that have an ocean view, sorted in increasing order.



/**
 * @param {number[]} heights
 * @return {number[]}
 */

var findBuildings = function(heights) {
    let solution = [];
    let highest_value = 0;
    
    for (let i = heights.length - 1; i >= 0; i--) {
        if (heights[i] > highest_value) {
            solution.push(i);
            highest_value = heights[i];
        }
    }
    
    return solution.sort((a, b) => a - b);
};

// Runtime: 107 ms, faster than 99.66% of JavaScript online submissions for Buildings With an Ocean View.
// Memory Usage: 61.9 MB, less than 19.26% of JavaScript online submissions for Buildings With an Ocean View.
