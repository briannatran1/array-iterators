//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(str){
  let arr = str.split('').map(val => Number(val));;
  return arr.reduce(function(acc, curr){
    if(curr >= 5){
      acc += 1
    }
    else{
      acc += 0
    }
    return acc;
  }, '');
}
