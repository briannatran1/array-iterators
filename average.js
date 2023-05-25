/*Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.*/

//use reduce to calculate average

function findAverage(arr) {
  if(arr.length === 0){
    return 0;
  }
  let sum = arr.reduce(function(acc, curr){
    return acc + curr;
  }, 0);
  return sum / arr.length;
}
