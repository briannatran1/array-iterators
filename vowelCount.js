/*Write a function, vowelCount, which accepts a string phrase.
It returns an object with the keys as each vowel and the values as the number of times the vowel appears in the string.

This function should be case-insensitive, so both lowercase vowels and uppercase vowels are counted as the same.*/

//turn str into lowercase and split into arr
//declare vowels var
//use reduce to create a freq counter for vowels
    //

function vowelCount(str) {
    let arr = str.toLowerCase().split('');
    const vowels = 'aeiou';
    return arr.reduce(function(acc, curr){
        if(vowels.includes(curr) && curr in acc){
            acc[curr]++;
        }
        else if(vowels.includes(curr) && !(curr in acc)){
            acc[curr] = 1;
        }
        return acc;
    }, {});
}
