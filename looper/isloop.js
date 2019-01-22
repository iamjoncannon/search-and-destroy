'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
	const cache = [linkedlist.head];
	
	let thisNode = linkedlist.head

	while(thisNode.next){
		if(cache.includes(thisNode.next.value)){
			return true  // thisNode.value  // || true //depending on extra credit or not;
		} else {
			cache.push(thisNode.next.value);
			thisNode = thisNode.next;
		}
	}
	return false;
};


// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const letters = ['a','b','c','d','e','f','g','h','i'];
// const emojis = ['🥚','🐣','🦅 ', '👾'];


// const test1 = new LinkedList();
// test1.addToHead(0)
// numbers.forEach(val => test1.addToTail(val));
// test1.getNthNode(6).next = test1.getNthNode(3);

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!
//cache is object of current value : current next value
//cache.HasOwnProperty(currentNextValue)

*/

module.exports = isLoop