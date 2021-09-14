// Implementing an Array using an object.
/* With the following methods: 
GET - return an element by the given index
PUSH - adds an element at the end of the array
POP - removes an element at the end of the array
DELETE - remove an item with the given index
SHIFT - ITEMS - it shifts all items to the left with the given index
*/

class MyArray{
	constructor(){
		this.length = 0;
		this.data = {};
	}

	get(index){
		return this.data[index];
	}

	push(item){
		this.data[this.length] = item;
		this.length++;
		return this.length
	}

	pop(){
		const lastItem = this.data[this.length-1];
		delete this.data[this.length-1];
		this.length--;
		return lastItem;
	}

	delete(index){
		const item = this.data[index];
		this._shiftItems(index);
		return item;
	}

	_shiftItems(index){ // get the "index" parameter passed down from the delete function
		for(let i = index; i < this.length; i++)  // iterating from wherever the index starts from 
			this.data[i] = this.data[i+1]		  // shifting all the items to the left 
		delete this.data[this.length-1];
		this.length--;
	}
}

const newArray = new MyArray()
newArray.push(1);
newArray.push(2);
newArray.push(3);
newArray.push(4);
newArray.push(5);
console.log(newArray);

newArray.delete(3); 
console.log(newArray);

