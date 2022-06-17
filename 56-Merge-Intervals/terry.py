class Solution(object):
    def merge(self, intervals):
        """
        :type intervals: List[List[int]]
        :rtype: List[List[int]]
        """
        intervals.sort()
        cur = intervals.pop(0)
        res=[]
        while intervals:
            top = intervals.pop(0)
            if cur[1] < top[0]:
                res.append(cur)
                cur = top
            else:
                cur = [min(cur[0],top[0]),max(top[1],cur[1])]
        res.append(cur)
        return res