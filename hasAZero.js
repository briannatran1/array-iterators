/*Write a function, hasAZero, which accepts a number, num. It should returns true/false if num contains at least one zero.

TIP Try to solve this using .some() or .every().*/

//to num into str and split into arr => turn each val into a number
//use some to see if num has at least one 0

function hasAZero(num) {
    let arr = num.toString().split('').map(Number);
    return arr.some(val => val === 0);
}
