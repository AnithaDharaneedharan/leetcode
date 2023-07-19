const sumOfUniqueElements = (nums) => {
    const lengthOfArray = nums.length;
    const uniqueMap = new Map();
    let duplicateArr = [];
    let sum = 0;

    for (i = 0; i < lengthOfArray; i++) {
        if (!duplicateArr.includes(nums[i])) {
            if (uniqueMap.has(nums[i])) {
                duplicateArr.push(nums[i]);
                uniqueMap.delete(nums[i]);
                sum = sum - nums[i];
            } else {
                uniqueMap.set(nums[i], i); // [[1,0], [2,1], [3,2]]
                sum = sum + nums[i];
            }
        }
    }
    return sum;

} 


console.log('sumOfUniqueElements', sumOfUniqueElements([1, 2, 3, 2]));
console.log('sumOfUniqueElements', sumOfUniqueElements([1, 1, 1, 1, 1]));
console.log('sumOfUniqueElements', sumOfUniqueElements([1, 2, 3, 4, 5]));