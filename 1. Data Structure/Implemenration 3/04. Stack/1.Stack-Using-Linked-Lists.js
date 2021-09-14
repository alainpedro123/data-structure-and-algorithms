// Stacks can be implemented using Arrays or Linked Lists. They both work fairly well

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek(){ // returning the element on the top
  	return this.top;
  }
  push(value){
  	const newNode = new Node(value);
  	if(this.length === 0){
  		this.top = newNode;
  		this.bottom = newNode;
  	}else{
  		const onHold = this.top;
  		this.top = newNode;
  		this.top.next = onHold;
  	}
  	this.length++;
  	return this;
  }
  pop(){  // remove the element on the top 
  	if(!this.top)
  		return null
  	
  	if(this.top === this.bottom){
  		this.bottom = null;
  	}

  	//const onHold = this.top;
  	this.top = this.top.next;
  	this.length--;
  	return this;
  }
  //isEmpty
}

const myStack = new Stack();

myStack.push('Google');
myStack.push('Udemy');
myStack.push('Facebook');
myStack.peek();
