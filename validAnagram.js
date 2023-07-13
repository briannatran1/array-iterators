/*Write a function, validAnagram, which takes two words, w1 and w2. It should return true/false if the strings are anagrams.
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

You may assume the words only contain lowercase letters, and have no spaces or other punctuation.

TIP Try to solve without nested loops!*/

//split words into strs
//use reduce to create 2 freq counters, one for each word
//iterate through count1,
    //if value of each key does not have the same count as w2,
        //return false
//return true

function validAnagram(w1, w2) {
    let arr1 = w1.split('');
    let arr2 = w2.split('');
    let count1 = arr1.reduce((acc, curr) => {
        if(curr in acc){
            acc[curr]++;
        }
        else{
            acc[curr] = 1;
        }
        return acc;
    }, {});
    let count2 = arr2.reduce((acc, curr) => {
        if(curr in acc){
            acc[curr]++;
        }
        else{
            acc[curr] = 1;
        }
        return acc;
    }, {});
    for(let key in count1){
        if(count1[key] !== count2[key]){
            return false;
        }
    }
    return true;
}
