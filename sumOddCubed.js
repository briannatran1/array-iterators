/*Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.*/

function cubeOdd(arr) {
  if(arr.some(val => typeof val !== 'number')){
    return undefined;
  }
  let cubed = arr.map(val => val ** 3);
  let odds = cubed.filter(val => val % 2 !== 0);
  return odds.reduce(function(acc, curr){
    acc += curr;
    return acc;
  }, 0);
}
