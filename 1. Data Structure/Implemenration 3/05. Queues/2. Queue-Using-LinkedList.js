// Queues - is better to implement them with Linked List over Arrays

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek(){
  	 return this.first;
  }
  enqueue(value){
  	const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
  	}else{
  		this.last.next = newNode;  // whatever was the last item is now pointing to the new node 
      	this.last = newNode;	   // and the new node is now last
  	}
  	this.length++;
  	return this;
  }
  dequeue(){
  	if(!this.first){
  		return null;
  	}
  	if(this.first === this.last){ // checking if that the last item of the queue
  		this.last = null;
  	}
  	this.first = this.first.next; // because we're removing the first element, we want the first element to become the second
  	this.length--;
  	return this;
  }
  //isEmpty;
}

const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Alain');
myQueue.dequeue();
myQueue.dequeue();
myQueue.peek();