class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort()        
        merged = []
        for st,en in intervals:
            if len(merged) ==0 or merged[-1][1]< st:
                merged.append([st,en])
            else:
                merged[-1][1] = max(merged[-1][1],en)
        return merged