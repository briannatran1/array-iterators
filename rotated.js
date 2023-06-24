/*The scroller works by replacing the current text string with a similar text string, but with the first letter shifted to the end; this simulates 
movement.

Your father is far too busy with the business to worry about such details, so, naturally, he's making you come up with the text strings.

Create a function named rotate() that accepts a string argument and returns an array of strings with each letter from the input string being 
rotated to the end.

rotate("Hello") // => ["elloH", "lloHe", "loHel", "oHell", "Hello"]
Note: The original string should be included in the output array. The order matters. Each element of the output array should be the rotated 
version of the previous element. The output array SHOULD be the same length as the input string. The function should return an emptry array 
with a 0 length string, '', as input.*/

//split str into arr and apply reduce arr of chars
  //use underscore as a placeholder for unused value since we're only interested in the curr index
  //create the rotated str and store in variable
  //push rotated str to acc
  //return acc

function rotate(str){
  return str.split('').reduce(function(acc, _, index){
    let rotated = str.slice(index) + str.slice(0, index);
    acc.push(rotated);
    return acc;
  }, []);
}
