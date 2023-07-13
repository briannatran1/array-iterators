/*Write a function, extractValue, which accepts an array of objects, objs, and a keyName.
It should return a new array with the value of each object at that keyName.

If there is no value at keyName, no value should be added to the output array.*/

//use reduce to iterate over objs and set acc to []
    //if curr obj has the keyName,
        //push value at key to acc
    //return acc

function extractValue(objs, keyName) {
    return objs.reduce(function(acc, curr){
        if(curr.hasOwnProperty(keyName)){
            acc.push(curr[keyName]);
        }
        return acc;
    }, []);
}
