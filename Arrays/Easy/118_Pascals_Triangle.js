// Given an integer numRows, return the first numRows of Pascal's triangle.

/**
 * @param {number} numRows
 * @return {number[][]}
 */

 var generate = function(numRows) {
    
    let arr = [];
    
    for (let i = 0; i < numRows; i++ ) {
        
        if (i === 0) {
            arr.push([1]);
        } 
        
        else if ( i === 1) {
            arr.push([1,1]);
        }
        
        else {
            let new_arr = arr[i - 1];
            let element = [1];
            
            for ( let j = 0; j < new_arr.length; j++ ) {
                
                if (j != new_arr.length - 1) {
                    let x = new_arr[j] + new_arr[j + 1];
                    element.push(x);
                } else {
                    element.push(1);
                }
            }
            arr.push(element);
        }
    }
    
    console.log(arr);
    return arr;
};

// Kinda slow but it works!