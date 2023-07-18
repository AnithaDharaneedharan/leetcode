# Problem link
https://leetcode.com/problems/jewels-and-stones/

Input: jewels = "aA", stones = "aAAbbbb"

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".


# Technique 1 
Brute Force method - which loops over one of the arrays and exhausts all the possibilities along with hashmap gives a time complexity of O(N) * O(1). Further to calculate the sum of all the values we use `reduce` method which increases the time complexity to `O(N^M)`

Space complexity is O(N) since a hashmap is created.

Since we need to calculate only the sum of the jewel values in the stone array , we 
can avoid setting the hashmap. Therefore in technique2 I have eliminated the use of hashmap.

# Technique 2
Brute Force method - which loops over one of the arrays and exhausts all the possibilities along with use of `filter` method to get the length of each jewel in the stones. Therefore the `space complexity` is `0(1)` as we are not creating new varibles/DS in the memory. 

Since we loop over 2 arrays , `O(N*M)` is the time complexity.

`O(N*M)` doesnt seem an optimum solution since we need to find a way to elimimate looping over both the arrays.

# Technique 3
This is similar to technique 2 except that I used `includes` which is better in perfomance than `filter`.


I figured out that the time complexity and space complexity of `split` method is O(N) which further increases the complexity and decreases the performance








