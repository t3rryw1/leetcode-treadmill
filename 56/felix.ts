// 2022-06 solution
function merge(intervals: number[][]): number[][] {
    // sort by start
    intervals = intervals.sort((a: number[], b: number[]) => {
        if (a[0] > b[0]) return 1;
        if (a[0] < b[0]) return -1;
        return 0;
    });
    
    let i = 0;
    while(i + 1 < intervals.length) {
        if (intervals[i][1] >= intervals[i + 1][0]) {
            intervals[i][1] = Math.max(intervals[i][1], intervals[i + 1][1]);
            intervals.splice(i + 1, 1);
        } else {
            i++;
        }
    }
    return intervals;
};
