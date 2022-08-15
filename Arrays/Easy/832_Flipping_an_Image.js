// Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

// To flip an image horizontally means that each row of the image is reversed.

//     For example, flipping [1,1,0] horizontally results in [0,1,1].

// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

//     For example, inverting [0,1,1] results in [1,0,0].

 // My solution is really slow with time of O(N^2) thanks to the two for loops. Looks like doing a single pass is possible, will look later.

 /**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    for (let i = 0; i < image.length; i++) {
        image[i] = image[i].reverse();
        
        for ( let j = 0; j < image[i].length; j++ ) {
            image[i][j] === 0 ? image[i][j] = 1 : image[i][j] = 0;
        }
    }
    
    return image;
};