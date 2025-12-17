/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    function buid(start, end) {
        if (start >  end) return null
        let mid = Math.floor((start + end) / 2)

        const node = new TreeNode(nums[mid])

        node.left = buid(start, mid-1)
        node.right = buid(mid + 1, end)

        return node
    }

    return buid(0, nums.length-1)
};