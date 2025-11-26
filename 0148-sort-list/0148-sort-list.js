/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {

    if(!head || !head.next)return head

   let fast = head
   let slow = head 
   let prev = null

    while (fast && fast.next){
        prev = slow
        slow = slow.next
        fast= fast.next.next
    }
    
    prev.next = null

    let left = sortList(head)
    let right = sortList(slow)


return merge(left ,right)

};


function merge(left, right){

let node = new ListNode(0)
let result = node

while(left && right){
    if(left.val < right.val){

        result.next = left
        left = left.next
    }else{
        result.next = right
        right = right.next
    }
    result = result.next
}


result.next = left || right
return node.next
}