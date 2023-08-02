/**
 * https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for(i=0; i<s.length; i++) {
        if(s[i] == 'c' && stack[stack.length -1 ] == 'b'  
        && stack[stack.length -2 ] == 'a') {
            stack.pop();
            stack.pop();
        } else {
            stack.push(s[i]); 
        }
    }

    return stack.length ? false : true ;
    
};
// TIME COMPLEXITY  O(N)
// SPACE COMPLEXITY O(N)