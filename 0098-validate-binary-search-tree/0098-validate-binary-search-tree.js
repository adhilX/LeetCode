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
var isValidBST = function(root) {
    
    if(!root) return true
  let prev = null
  let  result = true 
    function inorder(root){
          
    if(!root) return true
     inorder(root.left)
        if(prev){
           if(prev.val >= root.val){
            result = false
            return 
           }
        }
        prev = root
        inorder(root.right)
    }
    inorder(root)
   return result
};