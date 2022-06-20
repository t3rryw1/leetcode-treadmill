/**
* test cases: [2,4,0,0,0,0,5] [1,1,1,1,1,1], [0], [1], [0,1,2], [20,1,3]
*
*/

function canJump(nums: number[]): boolean {
    // record result of each index to avoid repetation.
    let map: {[index: string]: boolean} = {};
    // recursively jump from each step, and record results
    const maxIndex: number = nums.length - 1;
    function rec(index) {
        if (index >= maxIndex) return true;
        if (map[index] !== undefined) return map[index];
        if (nums[index] + index < maxIndex) {
            let found = false;
            for (let i = nums[index]; i > 0; i--) {
                found = found || rec(index + i);
                if (found) break;
            }
            map[index] = found;
            return found;
        } else {
            map[index] = true;
            return true;
        }
    }
    return rec(0);
};
