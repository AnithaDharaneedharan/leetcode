# Problem

https://leetcode.com/problems/contains-duplicate-ii/

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

# Technique1

Using the brute force method I am exhausting all possibilities with time complexity of O(N^2) since it is looping through the same array -> O(N) * O(N-1)
Space complexity is O(1)

# Technique2

Using the brute force method I am exhausting all possibilities with time complexity of O(N) and then using the hash map which is O(1).
Space complexity is O(n) because of the new hashmap created.


`numsLength` is defined to avoid calculating the length in every iteration.



