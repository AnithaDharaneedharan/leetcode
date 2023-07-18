
const containsNearbyDuplicate = (nums, k) => {
    const numsLength = nums.length;
    const resultMap = new Map();

    for (i = 0; i < numsLength; i++) {
        if (resultMap.has(nums[i]) && Math.abs(i - resultMap.get(nums[i])) <= k) {
            return true;
        }
        resultMap.set(nums[i], i);
    }
    return false;
}


console.log('containsNearbyDuplicate', containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
console.log('containsNearbyDuplicate', containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log('containsNearbyDuplicate', containsNearbyDuplicate([1, 2, 3, 1], 3));
