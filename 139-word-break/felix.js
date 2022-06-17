var wordBreak = function(s, wordDict) {
    let length = s.length;
    let mem = {};
    
    function rec(idx) {
        if(idx === length) { 
            return true;
        }
        
        for(let i = idx + 1; i <= length; i++) {
            if (mem[idx] === false) break;
            let word = s.substring(idx, i);
            if(wordDict.includes(word)){
               if(rec(i)){
                   return true;
               }
            }
        }
        
        mem[idx] = false;
        return false;
    }
    
    return rec(0);
};
