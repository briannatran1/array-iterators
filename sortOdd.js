/*You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]*/

//use filter to sort out odd numbers
//sort odds in ascending order
//declare oddIndex var to keep track of current index in odds arr
//use map to create a new arr 
  //if current val is odd, replace with odd num in odds arr 
  //increment index

function sortArray(arr) {
  let odds = arr.filter(val => val % 2 !== 0);
  let sortedOdds = odds.sort((a, b) => a - b);
  let oddIndex = 0;
  return arr.map(num => {
    if(num % 2 !== 0){
      let sortedNum = sortedOdds[oddIndex];
      oddIndex++;
      return sortedNum;
    }
    return num;
  });
}
