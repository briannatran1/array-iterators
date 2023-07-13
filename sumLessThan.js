/*Write a function, sumLessThan, which accepts an array of numbers, nums, and a number, maxNum.
It should return the sum of all numbers less than numMax.*/

//use reduce to iterate over nums
    //if current val is less than maxNum,
        //add to acc
    //return acc

function sumLessThan(nums, maxNum) { // [1, 2, 3], 3
    return nums.reduce(function(acc, curr){
        if(curr < maxNum){
            acc += curr;
        }
        return acc;
    }, 0);
}
