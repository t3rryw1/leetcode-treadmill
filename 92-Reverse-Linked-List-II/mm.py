# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        cur, prev = head, dummy
        
        for _ in range(left-1):
            cur, prev = cur.next, prev.next
        for _ in range(right-left):
            temp = cur.next
            # prev: 1 -> cur: 2 -> tmp: 3 -> 4
            # 1 -> 3 -> 2 -> 4 
            prev.next, cur.next, temp.next = temp, temp.next, prev.next

        return dummy.next