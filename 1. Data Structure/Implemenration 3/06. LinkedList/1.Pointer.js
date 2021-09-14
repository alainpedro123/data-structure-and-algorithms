// Pointer is a reference to another place in memory, to another object, to another node
 

const basket = ['apples', 'grapes', 'pears'];

// Pseucode of Linked-List
linked list: apples --> grapes --> pears

apples
8947 --> grapes
		  8742 --> pears
		  			372 --> null


const obj1 = { a: true };  // it's the location in memory { a: true}
const obj2 = obj1;  // this is a pointer 
