/*Write a function, hasCertainValue, which accepts an array of objects, objs, a string keyName, and searchValue.
It should return true/false if every object in objs contains that value for the given key name.

TIP Try to solve this using .some() or .every().*/

//use every to iterate over every obj and check if contains sought val for given key

function hasCertainValue(objs, keyName, searchValue) {
    return objs.every(obj => obj[keyName] === searchValue);
}
