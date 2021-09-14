let counter = 0;
function inception(){
	console.log(counter);
	// 1. Base case - when to stop 
	if (counter > 3)
		return 'done!'
	counter++;

	// 2. Recursive case - when counter is greater than 3
	return inception();
}

inception();

/*
3 rules to create a Recursive Function:

1. Identify the base case - when to stop
2. Identify the recursive case
3. Get closer and closre and return when needed. Usually we have 2 returns: Identify the base case and Identify the recursive case

*/

