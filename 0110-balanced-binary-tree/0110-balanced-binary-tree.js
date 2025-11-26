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
var isBalanced = function(root) {
    
    if(!root)return 1
   const right = isBalanced(root.right)
    const left = isBalanced(root.left)

   if(left === false || right === false)return false


   if(Math.abs(left-right)> 1)return false

    return Math.max(right,left)+1
};