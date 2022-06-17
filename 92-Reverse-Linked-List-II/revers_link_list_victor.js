/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    const newList = new ListNode(0, head);
    let pre = newList;
    //find reverse start
    for (let i = 1; i < left; i++) {
        pre = pre.next;
    }
    //reverse between left and right and re-link
    let cur = pre.next;
    for (let i = 0; i < right - left; i++) {
        let after = cur.next;
        cur.next = after.next;
        after.next = pre.next;
        pre.next = after;
    }
    return newList.next;
};