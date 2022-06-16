# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def reverseBetween(self, head, left, right):
        """
        :type head: ListNode
        :type left: int
        :type right: int
        :rtype: ListNode
        """
        if left == right: return head
        pre = ListNode(0,head)
        first,second = pre,pre.next
        while left>1:
            first,second = first.next,second.next
            left -= 1
            right -= 1
        start, reverseTail= first, second
        first.next = None
        while right >= 1:
            first, second.next, second = second, first, second.next
            right -= 1
        start.next, reverseTail.next = first, second
        return pre.next