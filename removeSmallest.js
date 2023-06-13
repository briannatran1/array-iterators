/*Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.*/

function removeSmallest(numbers) {
  return numbers.filter(function(val, index){
    let min = Math.min(...numbers);
    let minIndex = numbers.indexOf(min);
    return index !== minIndex;
  });
}
