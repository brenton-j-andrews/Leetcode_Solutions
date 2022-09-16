// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

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

var deleteDuplicates = function(head) {
    let currentNode = head;
    
    while (currentNode != null && currentNode.next != null) {
        let c = currentNode.val;
        if (currentNode.val === currentNode.next.val) {
            currentNode.next = currentNode.next.next;
        } 
        
        else {
            currentNode = currentNode.next;
        }
    } 
    
    return head;
};

// Runtime: 122 ms, faster than 29.26% of JavaScript online submissions for Remove Duplicates from Sorted List.
// Memory Usage: 44.1 MB, less than 76.28% of JavaScript online submissions for Remove Duplicates from Sorted List.