/*Write a function, pick, which accepts an object, obj, and an array, keys. It should return a new object with only the keys in keys.
If a key in keys isn’t in the object, that key is simply ignored.*/

//use reduce to create a new obj
    //if current key is in obj,
        //add key/value pair to acc
    //return acc

function pick(obj, keys) {
    return keys.reduce(function(acc, curr){
        if(curr in obj){
            acc[curr] = obj[curr];
        }
        return acc;
    }, {});
}
