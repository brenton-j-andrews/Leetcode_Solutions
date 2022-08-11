// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */


 var majorityElement = function(nums) {
    let element_count = {};
    
    nums.forEach(number => {
        let key = number.toString();
        element_count[key] = (element_count[key] || 0) + 1;
    })
    
    
    let value = 0;
    let key;
    
    for (element in element_count) {
        if (element_count[element] > value) {
            key = element;
            value = element_count[element];
        }
    }
    
    return key;
};


// This solution is really slow, but it does work...