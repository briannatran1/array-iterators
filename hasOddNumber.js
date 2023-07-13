/*Write a function, hasOddNumber, which accepts an array, nums. It should return true/false if the array contains at least one odd number.

TIP Try to solve this with .some() or .every()*/

//use some iterator to find at least one odd number in nums

function hasOddNumber(nums) {
    return nums.some(val => val % 2 !== 0);
}
