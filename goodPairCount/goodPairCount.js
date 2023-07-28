const numIdenticalPairs = (arr) => {

    let arrLen = arr.length;
    const resMap = new Map();
    let count = 0;
    for (i = 0; i < arrLen; i++) {

        if (resMap[arr[i]]) { // 1

            count = resMap[arr[i]] + count; // 3 
            resMap[arr[i]] = resMap[arr[i]] + 1; // [1, 3], [3, 2]

        }
        else {

            resMap[arr[i]] = 1; //[[1,3],[2,1],[3,1],]

        }

    }
    return count;
}

console.log('numIdenticalPairs', numIdenticalPairs([1, 2, 3, 1, 1, 3]));


// TIME COMPLEXITY : O(N)
// SPACE COMPLEXITY: O(N)