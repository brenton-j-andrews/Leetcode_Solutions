
// Given an array of strings wordsDict and two different strings that already exist in the array word1 and word2, return the shortest distance between these two words in the list.

// Example 1:

// Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "coding", word2 = "practice"
// Output: 3

// Example 2:

// Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "coding"
// Output: 1


/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

// One pass implementation! Not very effective memory usage but happy that I didn't use the brute force method (=

 var shortestDistance = function(wordsDict, word1, word2) {
    let distance = 0;
    let word1_open = false;
    let word2_open = false;
    let values = [];
    
    wordsDict.forEach(word => {
        if (word === word1) {
            if (word2_open) {
                values.push(distance);
                distance = 0;
                word2_open = false;
            }
            // Reset distance count if word appears multipule times before other word.
            if (word1_open) {
                distance = 0;
            }
            word1_open = true;
        }
        
        else if (word === word2) {
            if (word1_open) {
                values.push(distance);
                distance = 0;
                word1_open = false;
            }
            if (word2_open) {
                distance = 0;
            }
        
            word2_open = true;
        }
        
        if (word1_open || word2_open) {
            distance++;
        }
    })
    
    return Math.min(...values);
};

// Runtime: 87 ms, faster than 62.90% of JavaScript online submissions for Shortest Word Distance.
// Memory Usage: 42.9 MB, less than 34.68% of JavaScript online submissions for Shortest Word Distance.