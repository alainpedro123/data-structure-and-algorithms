// QUEUE Implementation using Array -> FIFO
/*METHODS: 
- enqueue
- dequeue: it removes the first element of the array  
- print: it returns all the elements of the queue 
- front: it returns the first element of the queue
- size, 
- isEmpty
*/
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

	print(){
		return this.data;
	}  

	front(){
		return this.data[0];
	}

	size(){
		return this.data.length;
	}

	isEmpty(){
		return this.data.length === 0;
	}
	
}

const myQueue = new Queue();
myQueue.enqueue('a');
myQueue.enqueue('b');
myQueue.enqueue('c');
myQueue.enqueue('d');
myQueue.print();

myQueue.dequeue();
myQueue.print();

myQueue.isEmpty();
myQueue.size();
myQueue.front();
