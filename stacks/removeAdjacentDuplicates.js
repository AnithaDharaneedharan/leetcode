/**
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = [];
    let sLen = s.length;
    for(i=0; i< sLen ; i++) { 
       
        if(s[i] == stack[stack.length-1]) { 
            stack.pop();
        } else {
            stack.push(s[i]); 
        }
    }

    return stack.join('');
    
};

// TIME COMPLEXITY  O(N)
// SPACE COMPLEXITY O(N) DUE TO CREATION OF NEW ARRAY STACK