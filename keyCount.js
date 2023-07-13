/*Write a function, keyCount, which accepts an array of objects, objs.
It should return a new object with a count of how many times each key appears in the array of objects.*/

//use reduce to create a freq counter
    //iterate through current obj using for...in loop
        //if key is in acc,
            //increment
        //else,
            //set to 1
    //return acc

function keyCount(objs) {
    return objs.reduce((acc, curr) => {
        for(let key in curr){
            if(key in acc){
                acc[key]++;
            }
            else{
                acc[key] = 1;
            }
        }
        return acc;
    }, {});
}
