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
var getMinimumDifference = function (root) {

    let diff = Infinity
    let prev = null
    function inorder(root) {
        if (!root) return
        inorder(root.left)
        if (prev) {
            diff = Math.min(root.val - prev.val, diff)
        }
        prev = root
        inorder(root.right)
    }
    inorder(root)
    return diff
};