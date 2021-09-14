/* PRIORITY QUEUE Implementation using Array 
METHODS: enqueue, dequeue, print, front, size, isEmpty
*/

//if priorities have the same numbers it will behave just like a normal queue FIFO

class PriorityQueue{ 
	constructor(){
		this.data = [];
	}
	isEmpty(){
		return this.data.lenght === 0;
	}

	enqueue (value){
		if(this.isEmpty())
			this.data.push(value);
		else{ //cheking the priorities. Priority starts from 1.
			let added = false;
			for(let i = 0; i <this.data.length; i++){  //if the new inserted value has priority greater than the existing values in the queue so we put it at the first position
				if(value[1] < this.data[i][1]){ //value[priority] < this.data[index][priority]. 
        // If the value we're passing has greater priority than the existing one...  
          this.data.splice(i,0,value); // then we put this value in the beginning of the queue: At position i(starting from 0), add the new "element, and 0 means to remove zero (none) element
					added = true;
					break;
				}
			}

			if(!added)
				this.data.push(value)
		}
	}

	dequeue(){
		const deletedItem = this.data.shift();
		return deletedItem[0];
	}

	print(){
		return this.data;
	}
	front(){ 
		return this.data[0];
	}

	size(){
		return this.data.lenght;
	}
}
    
const prioQueue = new PriorityQueue; 
prioQueue.enqueue(["Alain Afonso", 2]);   //[item , priority]
prioQueue.enqueue(["Edson Lucas", 3]);
prioQueue.enqueue(["Emanuel Jesus", 1]);
prioQueue.enqueue(["Gui Afonso", 2]);
prioQueue.print();

prioQueue.dequeue();
prioQueue.print();
prioQueue.front();