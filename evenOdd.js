/*Given an array, return object sorting numbers by whether they are even or odd*/

function evenOdd(arr){
  return arr.reduce(function(acc, curr){
    if(curr % 2 === 0){
      acc.even.push(curr);
    }
    else{
      acc.odd.push(curr);
    }
    return acc;
  }, {even: [], odd: []});
}
