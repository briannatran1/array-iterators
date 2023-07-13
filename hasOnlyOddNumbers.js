/*Write a function, hasOnlyOddNumbers, which accepts an array, nums. It should return true/false if every single number in the array is odd.

TIP Try to solve this using .some() or .every().*/

//use every to check if every number is an odd number

function hasOnlyOddNumbers(nums) {
    return nums.every(num => num % 2 !== 0);
}
