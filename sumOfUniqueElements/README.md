# Problem 

https://leetcode.com/problems/sum-of-unique-elements/

You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

Return the sum of all the unique elements of nums.

# Technique1
Time complexity is O(N^3) and space complexity is 0(N) since I created a new array - uniqueArray

# Technique2
Time complexity includes for loop and includes which is O(N)*0(M)  and space complexity is 0(N) for `duplicateArr` and `hashMap` since I created a new array for storing the duplicates and a hashmap for setting KV pair.