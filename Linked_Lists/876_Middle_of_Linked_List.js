// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

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

// Pretty slow solution but a good refresher on linked lists! 
// Maybe a way to avoid bulky getMiddleIndex function?

 var middleNode = function(head) {
    
    let getMiddleIndex = function(head) {
        let length = 0;
        let currentNode = head;
        
        while (currentNode != null) {
            length++;
            currentNode = currentNode.next;
        }
        
        if (length % 2 === 1) {
            return Math.ceil(length / 2);
        }
        
        else {
            return (length / 2 ) + 1;
        }
        
    }
    
    let middleIndex = getMiddleIndex(head);
    
    let currentNode = head;
    let currentIndex = 1;
    
    while (currentNode != null) {
        if (currentIndex === middleIndex) {
            head = currentNode;
        }
        
        currentIndex++;
        currentNode = currentNode.next;
    }
    
    return head;
}; 

// Runtime: 104 ms, faster than 20.38% of JavaScript online submissions for Middle of the Linked List.
// Memory Usage: 42.2 MB, less than 38.65% of JavaScript online submissions for Middle of the Linked List.