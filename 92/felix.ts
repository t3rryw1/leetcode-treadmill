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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    let valArr: { [index: string]: number } = {};
    
    function rec(node: ListNode | null, index) {
        if (!node) return;
        // record nodes that needs to be reversed
        if (index >= left && index <= right) {
            valArr[index] = node.val;
        } 
        rec(node.next, index + 1);
        // replace val
        if (index >= left && index <= right) {
            node.val = valArr[right - index + left];
        }
    }
    rec(head, 1);
    // return root no matter what
    return head;
};
