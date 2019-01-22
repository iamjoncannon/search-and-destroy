'use strict';

// Complete this algo
// const binarySearch = (array, target) => {
	
// 	let middle = Math.floor(array.length / 2);
// 	let middleNode = array[middle]
// 	let beginning = array[0]
// 	let end = array[array.length -1]

// 	if (beginning === end){
// 		return false 
// 	}
// 	else if (target === beginning || target === middleNode || target === end){
// 		return true
// 	}

// 	else if (target > middleNode){
// 		return binarySearch(array.slice(middle), target)
// 	}

// 	else if(target < middleNode){
// 		return binarySearch(array.slice(0, middle), target)
// 	}

// 	return false

// };

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

const binarySearch = (array, target) => {
	
	let middleVal; 
	let beginningVal = 0
	let endVal = array.length -1

	while( array[beginningVal] !== array[endVal] ) {

		console.log(middleVal, beginningVal, endVal)

		middleVal = Math.floor( (endVal - beginningVal) / 2)

		if (target === array[beginningVal] || 
			target === array[middleVal] || 
			target === array[endVal]
			){
			return true
		}

		else if (target > array[middleVal]){
			beginningVal = middleVal
		}

		else if(target < array[middleVal]){
			endVal = middleVal
		}


	}

	return false

};

module.exports = binarySearch