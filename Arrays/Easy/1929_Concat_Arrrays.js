/**
 * @param {number[]} nums
 * @return {number[]}
 */

 var getConcatenation = function(nums) {
    let arr_1 = nums;
    let arr_2 = arr_1.concat(nums);
    return arr_2;
};