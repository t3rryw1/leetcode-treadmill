class Solution(object):
    def wordBreak(self, s, wordDict):
        """
        :type s: str
        :type wordDict: List[str]
        :rtype: bool
        """
        wordSet = set(wordDict)
        flags = [False] * len(s)
        flags.insert(0,True)
        for i in range(len(s)):
            for size in range(20):
                if i-size <0:
                    continue
                if not flags[i-size]:
                    continue
                if s[i-size:i+1] in wordSet:
                    flags[i+1]=True
                    continue
        return flags[-1]