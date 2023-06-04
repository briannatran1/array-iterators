/*You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [  
  { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' },
  { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
  { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' }
];
Write a function that returns the array sorted alphabetically by the programming language. In case there are some developers that code in the same language, sort them alphabetically by the first name:

[ 
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
  { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' },
  { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
  { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' }
];*/

//use sort on list
/*If the language property of developer a is the same as the language property of developer b, we need to compare their first names.

To compare the first names, the localeCompare method is used. 
It compares the strings a.firstName and b.firstName and returns a negative number if a.firstName comes before b.firstName in the sort order, 
a positive number if a.firstName comes after b.firstName, 
or 0 if they are the same.

If the language properties of developers a and b are different, we use localeCompare to compare the language strings directly.*/

function sortByLanguage(list) {
  return list.sort((a, b) => {
    if(a.language === b.language){
      return a.firstName.localeCompare(b.firstName);
    }
    return a.language.localeCompare(b.language);
  });
}
