// EXAMPLE 1 - O(1) - Constant: no loops

const boxes = [0, 1, 2, 3, 4, 5];

const logFirstTwoBoxes = boxes =>{
	console.log(boxes[0]);  // 0(1)
	console.log(boxes[1]);	// 0(1)
}

logFirstTwoBoxes(boxes); // 0(1 + 1) = O(1)




// EXAMPLE 2 - It doesn't matter how big our input is we're always going to do the constant amount of time on a function 
const boxes = [0, 1, 2, 3, 4, 5];

const logFirstTwoBoxes = boxes =>{
	console.log(boxes[0]);  // 0(1)
	console.log(boxes[1]);	// 0(1)
}

logFirstTwoBoxes(boxes); // 0(1 + 1) = O(1)
