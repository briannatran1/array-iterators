/*Write a function, onlyEvenValues, which accepts an array of numbers and returns a new array with only the even values.*/

//use filter to make an arr with only even nums

function onlyEvenValues(nums) {
    return nums.filter(val => val % 2 === 0);
}
