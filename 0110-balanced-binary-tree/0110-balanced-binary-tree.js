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
    
   return  check(root) != -1


function check(root){
    if(!root)return 0
   const right = check(root.right)
    const left = check(root.left)

   if(left === -1 || right === -1)return -1


   if(Math.abs(left-right)> 1)return -1

    return Math.max(right,left)+1
};
}