/*Write a function, extractKey, which accepts an array of objects, objs, and a keyName.
It should return a new array with the values for that key in each object.

TIP Try to solve this using .map()*/

//use map to iterate through arr of objs
    //for each obj, return each value

function extractKey(objs, keyName) {
    return objs.map(obj => obj[keyName]);
}
