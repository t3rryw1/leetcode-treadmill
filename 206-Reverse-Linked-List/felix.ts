/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    let newHead: ListNode | null = null;
    
    function rec(node:ListNode | null, prevNode:ListNode | null) {
        if(node === null) return null;
        if (node.next !== null) {
            rec(node.next, node)
        } else {
            newHead = node;
        }
        node.next = prevNode;
    }
    rec(head, null);
    return newHead;
};
