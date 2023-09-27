/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let arrOp = [];
    let arr = [];
    let k =0;
    console.log('target.join(',')',target.join(''));
    console.log('arr.join(',')',arr.join(''));

        for(let i=1;i<=n;i++) {
            console.log('i', i);
      
            let j=i-1-k;
            console.log('j aft', j);
        if(target[j] == i) {
            console.log('target[j]',target[j]);
            arrOp.push('Push');
            arr.push(i);
            
        } else {
            arrOp.push('Push');
            arrOp.push('Pop');
            k = 1;
            console.log('k----',k)
        }
        console.log('arr',arr)
        console.log('arrop',arrOp)
        if(arr.join() == target.join()) {
            return arrOp;
        }
    }
  
    
       console.log('arr----',arr)
    console.log('arrOp----',arrOp)
    return arrOp;
    
};

console.log('buildArr', buildArray([1,3,4,6,7,8],9));