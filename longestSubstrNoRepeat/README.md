iterate over the array - O(N)
longest substring and its length  - return value is Integer -> MaxValue

iterate over every element and keep conactenating till unique elements and calcualte the length parallely 

if there is a duplicate element found while iterating , we need to create a new substring and check its length. 


CHALLENGE :how are we going to create the new substr? 
check if the maxStr contains the current element  - we will receive the first found index of the element. then strip it off and position the pointer of maxStr to the next element and continue to concatenate



if the length of new substring is greater than prev substr which is assigned in maxStr , then assign maxStr to the new substr length


