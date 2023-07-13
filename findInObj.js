/*Write a function, findInObj, which accepts an array of objects, a key, and some value to search for.
It should return the first found value in the array. If no match is found, return undefined.*/

//use find iterator to find the first value in the arr that matches the sought val
//if found is true,
    //return foudn
//return undefined

function findInObj(objs, key, val) {
    let found = objs.find(obj => obj[key] === val);
    if(found){
        return found;
    }
    return undefined;
}
