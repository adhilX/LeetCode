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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    
 function ff(root,result=[]){
    if(root){
        ff(root.left,result)
        result.push(root.val)
        ff(root.right, result)
    }
    return result
 }
    let finel = ff(root)
    return finel[k-1] 

};