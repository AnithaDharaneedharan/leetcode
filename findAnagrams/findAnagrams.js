const findAnagramMappings = (nums1, nums2) => {

    const numsLen = nums1.length;
    const resMap = new Map();
    const resArr = [];

    for(i=0; i < numsLen; i++) {
        resMap.set(nums2[i], i); // [[12,0],[28,1],[46,2],[32,3],[50,4]]
    }

    for(j=0; j < numsLen; j++) {
        if(resMap.has(nums1[j])) {  //50
            resArr.push(resMap.get(nums1[j])) //resmMap.get(50) = 4
        }
    }
    return resArr;
}

console.log('findAnagramMappings', findAnagramMappings([12,28,46,32,50],[50,12,32,46,28]));

// TIME COMPLEXITY : O(N) + O(N) = 2O(N)
// space COMPLEXITY : O(N) for map + O(N) for array = 2O(N)
