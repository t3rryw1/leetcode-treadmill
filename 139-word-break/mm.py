class Solution:
    def strFirst(self, s, wordDict):
        strLen = len(s)
        dp = [False] * (strLen+1)
        dp[0] = True

        for i in range(1, strLen+1):
            for j in range(0, i+1):
                pos = i-j
                if dp[pos] and s[pos : i] in wordDict:
                    dp[i] = True
                    continue

        return dp[-1]

    def dictFirst(self, s, wordDict):
        strLen = len(s)
        dp = [False] * (strLen+1)
        dp[0] = True

        for i in range(1, strLen+1):
            for word in wordDict:
                pos = i-len(word)
                if dp[pos] and word == s[pos : i]:
                    dp[i] = True

        return dp[-1]
        
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        return self.strFirst(s, wordDict)