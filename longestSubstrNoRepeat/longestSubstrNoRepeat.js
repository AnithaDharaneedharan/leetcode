
const longestSubstrNoRepeat = (s) => {

    const sLen = s.length;
    let maxStr = '';
    let maxStrLen = 0;
    let i, posIndex;

    for(i=0; i<sLen; i++) {
        let tmpStr = s[i];  //
        posIndex = maxStr.indexOf(tmpStr);
        if(posIndex > -1) {
            maxStr = maxStr.substring(posIndex  +1);
        }
        let newStr = maxStr.concat(tmpStr);
        maxStr = newStr;
        maxStrLen = Math.max(maxStr.length, maxStrLen);
    }
}

console.log(longestSubstrNoRepeat("dvdf"));

// time complexity - O(N) for loop
// space complexity - O(N) since we created maxStr
