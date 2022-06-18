class Solution(object):
    def canJump(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        reach, last = 0, len(nums)-1
        for i,num in enumerate(nums):
            reach = max(reach,i+num)
            if reach >= last:
                return True
            if reach ==i:
                return False