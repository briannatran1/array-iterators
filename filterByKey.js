/*Write a function, filterByKey, which accepts an array of objects and a keyName.
It should return a new array with all the objects that contain that key.*/

//use filter on objs
    //return an arr that only contains objs with the keyName

function filterByKey(objs, keyName) {
    return objs.filter(obj => {
        if(keyName in obj){
            return obj;
        }
    });
}
