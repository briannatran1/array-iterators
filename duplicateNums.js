/*Write a function that takes in an array of numbers, and returns a new array of all duplicate numbers.

solution([1, 2, 2, 3, 1])  // should return [1, 2]
solution([1, 1, 1, 1, 2, 3, 3])  // should return [3, 1]*/

//apply reduce to create new arr
	//check if num occurs more than once. if yes,
		//push to acc arr
	//return acc

function duplicateNums(arr){
	return arr.reduce(function(acc, curr){
		if(arr.indexOf(curr) !== arr.lastIndexOf(curr) && acc.indexOf(curr) === -1){
			acc.push(curr);
		}
		return acc;
	}, []);
}
