// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.



// Solution:
// My answer is slow on larger inputs. Leetcode says this wouldn't be good enough to get me a job but whatever (=

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function(ransomNote, magazine) {
    let mag_arr = Array.from(magazine);
    let ransom_arr = Array.from(ransomNote);
    let val =  true;

    ransom_arr.forEach(char => {
        if (mag_arr.includes(char)) {
            let index = mag_arr.findIndex((x) => x === char);
            if (index != -1) {
                mag_arr.splice(index, 1);
            }
        }
        
        else {
            val = false;
        }
    })
    
    return val;
};
