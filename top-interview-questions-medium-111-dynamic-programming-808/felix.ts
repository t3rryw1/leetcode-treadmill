// test cases:
// m = 1, n = 1
// m = 1, n = 7
// m = 3, n = 1
// m = 2, n = 2
// m = 100, n = 100

function uniquePaths(m: number, n: number): number {
    // record good paths from current position, then when bot goes back to this pos, it only needs to concat with previous try
    const map: {[m_n: string] : number } = {};
    // to match programical index
    m--;
    n--;
    /**
    * recursively go through the map
    * @param cm current m
    * @param cn current n
    * @return possibility count
    */
    function rec(cm, cn): number {
        if (cm === m && cn === n) return 1;
        if (cm > m || cn > n) return 0;
        const key = `${cm}_${cn}`;
        if (map[key] !== undefined) return map[key];
        let rightCount = rec(cm, cn + 1);
        let downCount = rec(cm + 1, cn);
        map[key] = rightCount + downCount;
        return map[key];
    }
    
    return rec(0, 0);
}
