// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let solution;
    let duplicates_arr = [];
    
    nums.forEach(number => {
        if (!duplicates_arr.includes(number)) {
            duplicates_arr.push(number);
        } else {
            let index = duplicates_arr.findIndex(num => num === number);
            duplicates_arr.splice(index, 1);
        }
    })
    
    solution = duplicates_arr[0];
    
    return solution
};

