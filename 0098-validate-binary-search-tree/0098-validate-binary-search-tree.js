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

    function valide(root, min ,max){
if(!root)return true
    if(root.val <= min || root.val >= max) return false
   

    return valide(root.right, root.val, max) && valide(root.left,min , root.val)
    }
    
    return valide(root , -Infinity, Infinity)
};

// var isValidBST = function(root) {
// let arr=[]
//     function inorder(root){
//      if(!root)return
//     inorder(root.left)
//     arr.push(root.val)
//     inorder(root.right)

//     }
//      inorder(root)

//     for(let i =0 ; i < arr.length-1 ; i++){
//         if(arr[i]>= arr[i+1] )return false
//     }
//     return true
// }

