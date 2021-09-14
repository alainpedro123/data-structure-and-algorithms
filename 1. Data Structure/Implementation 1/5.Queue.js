// QUEUE Implementation -> FIFO
/*METHODS: 
- enqueue
- dequeue: it removes the first element of the array  
- print: it returns all the elements of the queue 
- front: it returns the first element of the queue
- size, 
- isEmpty
*/

//1. First Implementation using Array. 
class Queue{
	constructor(){
		this.data = [];
	}

	enqueue(value){
		this.data.push(value);
	}

	dequeue(){
		this.data.shift();
	}

	front(){
		return this.data[0]; 
	}

	isEmpty(){
		return this.data.length === 0 ? true : false;
	}

	size(){
		return this.data.length;
	}

	print(){
		return this.data;
	}

}

const queue = new Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
queue.enqueue('d');
queue.print();

queue.dequeue();
queue.print();

queue.isEmpty();
queue.front();
queue.size();


//2. Second Implementation using LinkedList. 
class Node{
	constructor(value){
		this.value = value;
		this.next = null;
	}
}
class Queue{
	constructor(){
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	enqueue(value){
		const newNode = new Node(value);
		if(this.length === 0){
			this.first = newNode;
			this.last = newNode;
		}else{
			this.last.next = newNode;
			this.last = newNode;
		}
		this.length++;
		return this;
	}

	dequeue(){
		if(!this.first) // length === 0
			return null;

		if(this.first === this.last) // length === 1
			this.last = null;

		this.first = this.first.next;
		this.length--; 
		return this
	}

	front(){
		if(this.first)
			return this.first; 
	}

	isEmpty(){
		return this.length === 0 ? true : false;
	}

	size(){
		return this.length;
	}
}


const queue = new Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
queue.enqueue('d');
queue.front();

/*
queue.dequeue();
queue.print();

queue.isEmpty();
queue.front();


	