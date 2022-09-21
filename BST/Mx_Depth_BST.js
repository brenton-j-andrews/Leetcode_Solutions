// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.


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
 * @return {number}
 */

 var maxDepth = function(root) {

    if (root === null) {
        return 0;
    }
    
    return Math.max(1 + maxDepth(root.left), 1 + maxDepth(root.right));
};

// Runtime: 114 ms, faster than 33.98% of JavaScript online submissions for Maximum Depth of Binary Tree.
// Memory Usage: 45.1 MB, less than 61.03% of JavaScript online submissions for Maximum Depth of Binary Tree.