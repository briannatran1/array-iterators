/*Write a function. firstAndLast, which accepts an array, words, returns a new array with only the first and last character of each word.*/

//use map to transform arr
    //for each word, only return the first letter and last letter

function firstAndLast(words) {
    return words.map(word => word[0] + word[word.length - 1]);
}
