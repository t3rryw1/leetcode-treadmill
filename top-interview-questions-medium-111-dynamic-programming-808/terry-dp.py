class Solution(object):
    def uniquePaths(self, m, n):
        """
        :type m: int
        :type n: int
        :rtype: int
        """
        if m == 1 or n == 1: return 1
        if m == 2  or n == 2: return max(m,n)
        dp = [[1] * n]*m
        for y in range(1,m):
            for x in range(1,n):
                dp[y][x] = dp[y-1][x] + dp[y][x-1]
        return dp[-1][-1]
        