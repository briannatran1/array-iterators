/*You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];
your function should return true as there is at least one developer from each age group.*/


// declare an array ageGroup with the names of the required age groups.
//The function uses the every() method to iterate over each age group in the ageGroup array and check if all of them pass a certain condition.
//Inside the every() method, it uses the some() method to check if there is at least one developer in the list that matches the current age group.
//For each age group, it compares the age of each developer
//If there is at least one developer whose age falls within the specified range for the current age group, the some() method returns true.
//If all the required age groups pass the check, meaning there is at least one developer from each age group, the every() method returns true.
//If any of the required age groups fail the check, meaning at least one age group is not represented, the every() method returns false.
//The isAgeDiverse function returns the result of the every() method, indicating whether developers from all the required age groups are represented.

function isAgeDiverse(list) {
  let ageGroup = ['teens', 'twenties', 'thirties', 'forties', 'fifties', 'sixties', 'seventies', 'eighties', 'nineties', 'centenarian'];
  return ageGroup.every(function(ageRange){
    return list.some(function(dev){
      let age = dev.age;
      if(ageRange === 'teens'){
        return age >= 13 && age <= 19;
      }
      else if (ageRange === 'twenties'){
        return age >= 20 && age <= 29;
      }
      else if(ageRange === 'thirties'){
        return age >= 30 && age <= 39;
      }
      else if(ageRange === 'forties'){
        return age >= 40 && age <= 49;
      }
      else if(ageRange === 'fifties'){
        return age >= 50 && age <= 59;
      }
      else if(ageRange === 'sixties'){
        return age >= 60 && age <= 69;
      }
      else if(ageRange === 'seventies'){
        return age >= 70 && age <= 79;
      }
      else if(ageRange === 'eighties'){
        return age >= 80 && age <= 89;
      }
      else if(ageRange === 'nineties'){
        return age >= 90 && age <= 99;
      }
      else if(ageRange === 'centenarian'){
        return age >= 100;
      }
    });
  });
}
