/*You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

Your task is to return the number of JavaScript developers coming from Europe.

For example, given the following list:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];
your function should return number 1.

If, there are no JavaScript developers from Europe then your function should return 0.

Notes:

The format of the strings will always be Europe and JavaScript.
All data will always be valid and uniform as in the example above.*/

//Look through the array of objects, increment count every time there is a JS dev from Europe

//use reduce on list and set acc to 0
  //declare vars for continent and language
  //if continent is europe and language is js,
    //increment acc,
  //return acc

function countDevelopers(list) {
  return list.reduce(function(acc, curr){
    let continent = curr.continent;
    let language = curr.language;
    if(continent === 'Europe' && language === 'JavaScript'){
      acc++;
    }
    return acc;
  }, 0);
}
