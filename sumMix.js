/*Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.*/

//use map to turn every val into a number
//use reduce to return sum of numbers into a single number

function sumMix(arr){
  let num = arr.map(val => Number(val));
  return num.reduce(function(acc, curr){
    return acc + curr;
  }, 0);
}
