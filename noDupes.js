/*Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.*/

//use reduce to return a new arr containing no dupes

function distinct(arr) {
  return arr.reduce(function(acc, curr){
    if(!acc.includes(curr)){
       acc.push(curr);
    }
    return acc;
  }, []);
}
