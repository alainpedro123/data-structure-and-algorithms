const strings = ['a', 'b', 'c', 'd'];
console.log(strings);

// accessing the element at index 2
strings[2];

// PUSH - adds an element at the end of the array
strings.push('e');        // O(1)

// POP - removes an element at the end of the array
strings.pop();            // O(1)

// UNSHIFT - adds an element at the beggining of the array
strings.unshift('x');     // O(n) 

// SPLICE - adds the element 'alien' in the index 2 of the Array strings
strings.splice(2, 0, 'alien');   // we looped to half of the array  O(n/2) => O(n)
console.log(strings);