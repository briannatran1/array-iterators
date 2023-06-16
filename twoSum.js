/*Write a function that takes in an array of numbers and a number, and returns true if any pairs add up to the number. (The numbers in the array is not
unique, meaning there may be duplicate numbers)

solution([1,2,22,333,23], 25)   // returns true
solution([1,2,22,333,23], 24)   // returns true*/

//use some to return true if there is a match
//find needed number to sum up to target => declare var
//if otherNum is included in the rest of the arr,
  //return true

function twoSum(arr, target){
	return arr.some((num, index) => {
		let otherNum = target - num;
		return arr.slice(index + 1).includes(otherNum);
	});
}
