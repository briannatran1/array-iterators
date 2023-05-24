*/Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]*/

//iterate through arr using map
  //if num has a square root, 
    //return square root
  //else,
    //square num

function squareOrSquareRoot(arr) {
  return arr.map(function(num){
    if(Math.sqrt(num) % 1 === 0){
      return Math.sqrt(num);
    }
    else{
      return num ** 2;
    }
  });
}
