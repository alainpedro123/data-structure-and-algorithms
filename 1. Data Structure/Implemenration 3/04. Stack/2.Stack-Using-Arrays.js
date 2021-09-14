// Stacks can be implemented using Arrays or Linked Lists. They both work fairly well

class Stack {
  constructor(){
    this.array = [];
  }
  peek(){ // returning the element on the top
  	return this.array[this.array.length-1];
  }
  push(value){
  	this.array.push(value);
  	return this;
  }
  pop(){  // remove the element on the top 
  	this.array.pop();
    return this
  }
  //isEmpty
}

const myStack = new Stack();

myStack.push('Google');
myStack.push('Udemy');
myStack.push('Facebook');

myStack. pop();
myStack.peek();
