/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;

    let map = new Map(); 
    function dfs(originalNode) {
        if (map.has(originalNode)) {
            return map.get(originalNode);
        }

        let clone = new Node(originalNode.val);
        map.set(originalNode, clone);

        clone.neighbors = originalNode.neighbors.map(dfs);
        return clone;
    }

    return dfs(node);
};
