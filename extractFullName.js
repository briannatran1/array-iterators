/*Write a function, extractFullName, which accepts an array of person objects, people.
It should return a new array of the full names of each person.*/

//use map to iterate over arr of objs
    //for each obj, access first and last name key

function extractFullName(people) {
    return people.map(obj => obj.first + ' ' + obj.last);
}
