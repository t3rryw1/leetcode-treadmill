// 2021-06 solution
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let results = [];
    let min, max;
    for (let i = 0; i < intervals.length; i++) {
        if (i === 0) {
            min = intervals[i][0];
            max = intervals[i][1];
            results.push(intervals[i]);
        } else if (intervals[i][0] > max) {
            max = intervals[i][1];
            results.push(intervals[i]);
        } else if (intervals[i][1] < min) {
            min = intervals[i][0];
            results.push(intervals[i]);
        } else {
            // intersections
            let cMin = intervals[i][0];
            let cMax = intervals[i][1];
            for (let j = results.length - 1; j >= 0; j--) {
                if (results[j][0] > intervals[i][1] || results[j][1] < intervals[i][0]) continue; // ignore
                cMin = Math.min(results[j][0], cMin);
                cMax = Math.max(results[j][1], cMax);
                results.splice(j, 1); // remove
            }
            min = Math.min(cMin, min);
            max = Math.max(cMax, max);
            results.push([cMin, cMax]);
        }
    }
    return results;
};
