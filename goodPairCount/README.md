https://leetcode.com/problems/number-of-good-pairs/
A pair (i, j) is called good if nums[i] == nums[j] and i < j.
Input: nums = [1,2,3,1,1,3] Output: 4


iterate through nums array
create a hashmap and store the values [[1, 0], [2, 1] ,[3, 2]]
if hashmap contains the value , then get the hashvalue of the value and  check if the index is less than current index

return the number of pairs -> 1. extract the pairs meeting the condition 2.count the length of pairs

we dont have to store the pairs since we need only the count, just increment the count value when condition is met

Question:  are we ignoring the condition i < j since it is the default
accessing map by index and has / get syntax difference in execution - map vs obj


