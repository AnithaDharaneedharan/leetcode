
const containsNearbyDuplicate = (nums, k) => {
    const numsLength = nums.length;
    for (i = 0; i < numsLength; i++) {
        for (j = i + 1; j < numsLength; j++) {
            if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
                return true;
            }
        }
    }
    return false;
}


console.log('containsNearbyDuplicate', containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
console.log('containsNearbyDuplicate', containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log('containsNearbyDuplicate', containsNearbyDuplicate([1, 2, 3, 1], 3));
