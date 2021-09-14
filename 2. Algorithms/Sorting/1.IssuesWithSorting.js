const letter = ['a', 'd', 'z', 'e', 'r', 'b'];
letter.sort();

const basket = [2, 65, 34, 2, 1, 7, 8];
basket.sort(); // ISSUE!! - Javascript converts numbers to string.
basket.sort(()=(a,b) => a-b) // SOLUTION!!

const spanish = ['único', 'árbol', 'cosas', 'fútbol'];
spanish.sort(); // ISSUE!!

spanish.sort(function(a,b){ // SOLUTION!!
	return a.localeCompare(b);
})