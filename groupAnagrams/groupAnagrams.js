const groupAnagrams = (arr) => {
    const firstMap = new Map();
    const secondMap = new Map();
    const resultArr = [] ;
    for(let i=0; i < arr.length; i++) { // eat len=5
        for(let j=1; j < arr.length; j++) { //ate  
            console.log('arr', arr);
            console.log('arr[i]', arr[i]);
            console.log('arr[j]', arr[j]);
            if(arr[i].length == arr[j].length) {
                for(let k=0; k < arr[i].length; k++) {
                    firstMap[arr[i][k]] = 1 + (firstMap[arr[i][k]]  || 0); // [[e,1],[a,1],[t,1]]
                    console.log('firstMap', firstMap);
        
                    secondMap[arr[j][k]] = 1 + (secondMap[arr[j][k]]  || 0); // [[]]
                    console.log('secondMap', secondMap);

                    // compare firstMap and secondMap

                    for(let[key, value] of Object.entries(firstMap)) {
                        if(firstMap[key] == secondMap[key]) {
                            resultArr.push(arr[i], arr[j])
                            console.log('resultArr',resultArr);
                        }
                    }

                   }
            }

        }
    }

}

console.log('groupAnagrams', groupAnagrams(['eat', 'ate', 'rat', 'cat', 'tea']));