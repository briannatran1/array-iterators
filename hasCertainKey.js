/*Write a function, hasCertainKey, which accepts an array of objects, objs, and a keyName.
It should return true/false if every object in the array contains keyName.*/

//use every to check if each obj in arr has specified key

function hasCertainKey(objs, keyName) {
    return objs.every(obj => obj.hasOwnProperty(keyName));
}
