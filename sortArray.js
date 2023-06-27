/*Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.

Example 1
a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
Example 2
a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin']
a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo']

returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']
Each element in the arrays will start with a unique letter so there will only be a single match for each element.*/

//use map on a2 to iterate over arr
  //find first letter of each word
  //find corresponding index in a1
  //return new obj for each word with its index
//sort index in ascending order
//use map to extract only the word property from the objs

function sortArray(a1, a2) {
  return a2.map(word => {
    let letter = word[0].toLowerCase();
    let index = a1.findIndex(a => a.toLowerCase().startsWith(letter));
    return {word, index};
  })
  .sort((a, b) => a.index - b.index)
  .map(({word}) => word);
}
