// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// RECURSIVE SOLUTION, STARTING TO GET BETTER AT THIS STUFF! 

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

 var isSymmetric = function(root) {
    
    // Helper function to compare two sub-trees.
    let helper = function (p, q) {
        
        // Recursive base case:
        if (p == null && q == null) return true;
        
        if (p == null || q == null) return false;
        
        if (p.val != traversal != q.val) return false;
        
        return (helper(p.left, q.right) && helper(p.right, q.left));
    }
    
    return helper(root.left, root.right);
};

// Runtime: 113 ms, faster than 36.29% of JavaScript online submissions for Symmetric Tree.
// Memory Usage: 44.5 MB, less than 67.56% of JavaScript online submissions for Symmetric Tree.