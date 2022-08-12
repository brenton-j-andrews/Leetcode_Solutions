// You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:

// numberOfBoxesi is the number of boxes of type i.
// numberOfUnitsPerBoxi is the number of units in each box of the type i.

// You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.

// Return the maximum total number of units that can be put on the truck.



/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
    let unit_count = 0;
    let box_count = 0;
    
    // Sort input arr by highest units per box.
    boxTypes.sort(function(a, b) {
                  return a[1] - b[1];
    }).reverse()
    
    boxTypes.forEach(box => {
        // If all boxes of current element fit. 
        if (box_count + box[0] <= truckSize) {
            box_count += box[0];
            unit_count += box[0] * box[1];
        } 
        
        // Else fit as many as possible.
        else if (box_count < truckSize) {
            let box_num = truckSize - box_count;
            box_count += box_num;
            unit_count += box[1] * box_num;
        }
    })
    
    return unit_count;
};


// Runtime: 87 ms, faster than 86.78% of JavaScript online submissions for Maximum Units on a Truck.
// Memory Usage: 44.6 MB, less than 63.20% of JavaScript online submissions for Maximum Units on a Truck.
