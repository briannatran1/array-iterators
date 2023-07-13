/*Write a function, hasNoDuplicates, which accepts an array, nums, and returns true/false if there are no duplicate values.

TIP Try different ways to solve this
You could solve this using .some() or .every(). You could also solve it by using a Set.*/

//create a new Set
//compare size of Set to the length of nums
//if the are equal, return true

function hasNoDuplicates(nums) {
    let set = new Set(nums);
    return set.size === nums.length;
}

//use every to iterate over nums
//compare index of first occurrence of num to current index => checks if current occurrence matches current index

function hasNoDuplicates(nums){
    return nums.every((num, idx) => nums.indexOf(num) === idx);
}

//use some method

function hasNoDuplicates(nums){
    return !nums.some((num, idx) => nums.indexOf(num) !== idx);
}
