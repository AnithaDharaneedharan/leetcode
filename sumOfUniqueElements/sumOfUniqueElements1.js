const sumOfUniqueElements = (nums) => {

    const lengthOfArray = nums.length;
    const uniqueArr = new Array();

    for (i = 0; i < lengthOfArray; i++) { 
        const numberOfOccurences = nums.filter(num => nums[i] == num).length;  
        if (numberOfOccurences == 1) {
            uniqueArr.push(nums[i]); //O(1)
        }
    }
    return uniqueArr.reduce((acc, cv) => acc + cv, 0); // O(N)

}

console.log('sumOfUniqueElements', sumOfUniqueElements([1, 2, 3, 2]));
console.log('sumOfUniqueElements', sumOfUniqueElements([1, 1, 1, 1, 1]));
console.log('sumOfUniqueElements', sumOfUniqueElements([1, 2, 3, 4, 5]));