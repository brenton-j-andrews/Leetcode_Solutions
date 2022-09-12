// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

 var kidsWithCandies = function(candies, extraCandies) {
    let highest_value = 0;
    
    candies.forEach(candy => {
        if (candy >= highest_value) {
            highest_value = candy;
        }
    })
    
    let boolArr = candies.map((candy) => (candy + extraCandies) >= highest_value);
    
    return boolArr;
};


// Runtime: 89 ms, faster than 61.76% of JavaScript online submissions for Kids With the Greatest Number of Candies.

// Memory Usage: 42.5 MB, less than 49.07% of JavaScript online submissions for Kids With the Greatest Number of Candies.