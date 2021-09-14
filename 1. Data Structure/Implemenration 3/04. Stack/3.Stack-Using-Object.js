// STACK implementation using Object with the following METHODS: push, pop, size, peek
// LIFO

class Stack{ 
	constructor(){
		this.data = {};
		this.length = 0;
	}
	push (value){
		this.data[this.length] = value;
		this.length++;
	}

	pop(){
		if(this.length === 0)
			return undefined;

		this.length--;		    //this.length -> grab the index of last item in the stack
		const result = this.data[this.length];
		delete this.data[this.length];  // delete the item and its index
		return result; // return the deleted item.
	}

	size(){
		return this.length;
	}

	peek(){
		return this.data[this.length-1];
	}
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
mystack.data;
mystack.peek();
mystack.pop();
mystack.peek();
mystack.push("Alain");
mystack.size();
mystack.peek();
mystack.pop();
mystack.peek();
