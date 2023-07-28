const canPermutePalindrome = function(s) {
    const sLen = s.length;
    const resMap = new Map();
    let count = 0;
    for(let i=0; i< sLen; i++) {

        if(resMap.has(s[i])) { // a
            resMap.set(s[i], resMap.get(s[i])+1) //[[a,2], [b,1]]
            if(resMap.get(s[i])%2 == 0){
                count = resMap.get(s[i]) + count;
                resMap.delete(s[i]);
            }
        } else {
            resMap.set(s[i], 1) //[[a,1], [b,1]]
        }
    }

    if(count == sLen-1 || count == sLen) {
        return true;
    }
   return false;

};

console.log('canPermutePalindrome', canPermutePalindrome("aaa"));

// time complexity O(N)

// space complexity  O(N)