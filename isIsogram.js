/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false*/

//convert str to lowercase
//split str to arr
//create freq counter for each letter using reduce
//iterate through freq counter,
  //if val is not equal to 1,
    //return false
//return true

function isIsogram(str){
  str = str.toLowerCase();
  let arr = str.split('');
  let count = arr.reduce(function(acc, curr){
    if(curr in acc){
      acc[curr]++;
    }
    else{
      acc[curr] = 1;
    }
    return acc;
  }, {});
  for(let key in count){
    if(count[key] !== 1){
      return false;
    }
  }
  return true
}
