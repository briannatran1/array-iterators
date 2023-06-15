/*We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)*/

//turn word into all lowercase
//split word into arr
//declare vowels var
//use reduce to create a new arr
  //if current letter is a vowel,
    //push index + 1 to acc arr
  //return acc

function vowelIndices(word){
  let lower = word.toLowerCase();
  let arr = lower.split('');
  const vowels = 'aeiouy';
  return arr.reduce(function(acc, curr, index){
    if(vowels.includes(curr)){
      acc.push(index + 1);
    }
    return acc;
  }, []);
}
