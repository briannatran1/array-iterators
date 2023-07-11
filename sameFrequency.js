/*Write a function, sameFrequency, which accepts two numbers. It should return true/false if they contain the same frequency of digits.

sameFrequency(1122, 1212);  //  true
sameFrequency(1122, 121);  // false
sameFrequency(1122, 12121);  // false*/

//turn nums into strs and split into arrs
	//make sure arr vals are numbers
//use reduce to create freq counters
//iterate through count1,
	//if count1 val does not equal count2,
		//return false
//return true

function sameFrequency(n1, n2) {
	let arr1 = n1.toString().split('').map(Number);
	let arr2 = n2.toString().split('').map(Number);
	let count1 = arr1.reduce(function(acc, curr){
		if(curr in acc){
			acc[curr]++;
		}
		else{
			acc[curr] = 1;
		}
		return acc;
	}, {});
	let count2 = arr2.reduce(function(acc, curr){
		if(curr in acc){
			acc[curr]++;
		}
		else{
			acc[curr] = 1;
		}
		return acc;
	}, {});
	for(let key in count1){
		if(count1[key] !== count2[key]){
			return false;
		}
	}
	return true;
}
