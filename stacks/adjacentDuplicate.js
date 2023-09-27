/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    const stack = [];
    const resMap = new Map();
  
    for(i=0;i<s.length;i++) {

        if(resMap.has(s[i])) {
              resMap.set(s[i], resMap.get(s[i]) + 1);         
        } else {
            resMap.set(s[i], 1);
        }

        stack.push(s[i]);   
        console.log('stack',stack)
        console.log('resMap --->', resMap)
        if(resMap.get(s[i]) == k ) {
            console.log('resMap', resMap)
            let elToDel = k;
             
            while(elToDel--) {
                if(stack[stack.length-1] == s[i]) {
                   stack.pop();
                }
            } 
           resMap.set(s[i], 0)
        }  
    }
    return stack.join('');
    
};

console.log('removeDuplicates', removeDuplicates("dtpdtaaaaaaaaappppppppppppppppppppaaaaaaaaaaxxxxxxxxxxxxxxsssssssssjjjjjjjjjjjjjjjjjjjjxxxxxxxxxxxxxxxxxxxxsssssssjjjjjjjjjjjjjjjjjjjjssssxxxxxxatdwvvpctpggggggggggggggggggggajagglaaaaaaaaaaaaaaaaaaaa" ,20
))