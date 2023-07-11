/*Write a function, twoArrayDifference, which accepts two arrays, arr1 and arr2.
It should return an array of all the values in arr1 that are not in arr2.

The returned array should preserve the order of elements from the first array.*/

//use filter to return an arr without values from arr2

function twoArrayDifference(arr1, arr2) {
    return arr1.filter(val => !arr2.includes(val));
}
