// s = "abccccdd"

const getLongestPalindrome = (s) => {
    const len = s.length;
    const resMap = new Map();
    let maxPalLen = 0;
    let count = 1;
    for (let i = 0; i < len; i++) {

        if (resMap.has(s[i])) { // c present
            resMap.set(s[i], count + resMap.get(s[i])); // [[a,1], [b,1], [c,2]]

            if (resMap.get(s[i]) % 2 == 0) {
                maxPalLen = resMap.get(s[i]) + maxPalLen; // 2
                resMap.delete(s[i]);
            }
        }
        else {
            resMap.set(s[i], count); // [[a,1], [b,1], [c,1]]
        }
    }

    if (maxPalLen % 2 == 0 && maxPalLen < len) {
        return maxPalLen + 1;
    }

    if (maxPalLen % 2 == 0 && maxPalLen == len) {
        return maxPalLen;
    }

    return 1;
}

console.log('getLongestPalindrome', getLongestPalindrome("BB"));

// Time complexity O(N)
// Space complexity O(N)
