/*Write a function, valTimesIndex, which accepts an array of numbers and returns a new array with each value multiplied by its index in the array.

TIP Try to solve this using .map()*/

//use map which accepts 2 parameters -> val and idx and it return val * idx

function valTimesIndex(nums) {
    return nums.map((val, idx) => val * idx);
}
