/*
STACK implementation using Array. 
METHODS:
- Push: add an element 
- Pop: remove an element
- Peek: it returns the element on the top
- Size: it returns the length of the array
*/

class Stack{
	constructor(){
		this.data = [];
	}
	push(value){
		this.data.push(value);
		return this;
	}
	pop(){
		this.data.pop();
		return this;
	}
	peek(){
		return this.data[this.data.length-1];
	}
	size(){
		return this.length;
	}
}

const stack = new Stack();
stack.push('Google');
stack.push('Udemy');
stack.push('Facebook');
stack.push(4);

stack.pop();
stack.peek();


// #########################################

// STACK implementation using Object 

class Stack{ 
	constructor(){
		this.data = {};
		this.length = 0;
	}
	push (value){
		this.data[this.length] = value;
		this.length++;
		return this;
	}

	pop(){
		if(this.length === 0)
			return undefined;

		this.length--;		    
		const result = this.data[this.length];
		delete this.data[this.length]; 
		return result;
	}

	size(){
		return this.length;
	}

	peek(){
		return this.data[this.length-1];
	}
}

const myStack = new Stack();
myStack.push(2);
myStack.push(4);
myStack.push(6);
myStack.push(8);
myStack.size();

myStack.peek();

myStack.pop();
myStack.peek();

myStack.push("Alain");
