/*Write a function called solution that takes in 2 parameters, a string and a letter, and returns the number of times the character shows up in the string
result = solution('abc', 'a') // 1
result = solution('bccbccb', 'b') // 3*/

//turn str into arr
//appy reduce to create a new counter obj
    //if curr is the same as letter,
        //increment acc
    //return acc

function letterCount(str, letter){
    let arr = str.split('');
    return arr.reduce(function(acc, curr){
        if(letter === curr){
            acc++;
        }
        return acc;
    }, 0);
}
