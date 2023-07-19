
/* findDifference2Arrays  
https://leetcode.com/problems/find-the-difference-of-two-arrays/
Iterate over the first array and check if each element is present in the second array
if it is present remove the element from both the arrays
if it not present do not do anything and return the unique values by doing new Set()
splice should be after the filter O(N)
*/



const findDifference2Arrays = (nums1, nums2) => {

    const nums1Length = nums1.length;
    const duplicateNums = [];
    let filteredNums1, filteredNums2;

    for (i = 0; i < nums1Length; i++) {
 
        // [1,2,3,2], [2,4,6]
        if (nums2.includes(nums1[i])) {
            console.log('111');
             filteredNums2 = nums2.filter(n2 => n2 !== nums1[i]);  // [4,6]
            nums2 = filteredNums2;
            duplicateNums.push(nums1[i]); // 2

        }

        if (duplicateNums.includes(nums1[i])) { //2 
            console.log('222');
             filteredNums1 = nums1.filter(n1 => n1 !== nums1[i]);  // [1,3]
        }

    }


    return [Array.from(new Set(filteredNums1)), Array.from(new Set(filteredNums2))];

} // O(N^5) is time complexity

console.log(findDifference2Arrays([1, 2, 3], [2, 4, 6]));
console.log(findDifference2Arrays([1, 2, 3, 3], [1, 1, 2, 2]));
console.log(findDifference2Arrays([0, 0, 3, 3], [3, 1, 2, 2, 0]));