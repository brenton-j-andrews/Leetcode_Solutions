// Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order, return a sorted array of only the integers that appeared in all three arrays.

 

// Example 1:

// Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
// Output: [1,5]
// Explanation: Only 1 and 5 appeared in the three arrays.



/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */

 var arraysIntersection = function(arr1, arr2, arr3) {
    
    function intersection(set1, set2) {
        const _intersection = new Set();
        
        for (const elem of set1) {
            if (set2.has(elem) && set3.has(elem)) {
                _intersection.add(elem);
            }
        }
        
        return _intersection;
    }
    
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    let set3 = new Set(arr3);
    
    return Array.from(intersection(set1, set2, set3));
};

// Runtime: 102 ms, faster than 53.13% of JavaScript online submissions for Intersection of Three Sorted Arrays.
// Memory Usage: 44.6 MB, less than 36.72% of JavaScript online submissions for Intersection of Three Sorted Arrays.