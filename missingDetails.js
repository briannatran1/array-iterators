/*You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
write a function that

adds the question property to each object in the input array where the developer has not provided the relevant details (marked with a null value in JavaScript, with the default value in COBOL). The value of the question property should be the following string:
Hi, could you please provide your <property name>.

and returns only the developers with missing details:
[
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
  question: 'Hi, could you please provide your firstName.' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
  question: 'Hi, could you please provide your language.' }
]*/

//use filter on input list
  //get an array of all keys in each obj, and filter our keys that have a null value
  //if length of array of null keys is greater than 0,
    //add question property with formatted value
    //return true to include obj in filtered result
  //else,
    //return false to exclude obj in filtered result

function askForMissingDetails(list) {
  return list.filter(function(dev){
    let missing = Object.keys(dev).filter(key => dev[key] === null);
    if(missing.length > 0){
      dev.question = `Hi, could you please provide your ${missing.join(', ')}.`;
      return true;
    }
    return false;
  });
}
