/**
 * https://leetcode.com/problems/backspace-string-compare/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {


    const stackOp = (str) => {
            let stack = [];
            for(i=0; i<str.length; i++) {
            if(str[i] == '#') {
                stack.pop();
            } else {
                stack.push(str[i]); 
            }
        }
    
       return stack.join('');
    }
    
    
    return stackOp(s) === stackOp(t);
        
    };
    
    // TIME COMPLEXITY -> 0(N)
    // SPACE COMPLEXITY -> 0(N)