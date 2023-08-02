
/**
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}

 ( )
 
 create a map with key as the open brack and value as close brack
 iterate -> top => s[i]
 top = s[0]; i=1  , map(s[0]) s[1]; match found - pop 
 */
var isValid = function(s) { //({[})
    let stack = [];
    const parObj = {')':'(', '}': '{', ']':'['}
    let len = s.length;

    for(let i = 0; i < len; i++) {
    
    if(stack[stack.length -1] !== undefined && stack[stack.length -1] === parObj[s[i]]) {
            stack.pop();
        } else {
            stack.push(s[i]); 
        }

    }
  
    return stack.length > 0 ? false : true;

};

// O(N)- BOTH TIME AND SPACE COMPLEXITY