// Singly Linked List
/*
	1) append - it adds an element in the end of the list
	2) prepend - it adds an element in the beginning of the list
	3) insert - it inserts at the location(index), this element(value) into the list
	4) PrintList - 
	5) traverseToIndex - traversal to find an index and return its value. traversal = travel across or through.
	6) remove
*/

class Node {
	constructor(value){
		this.value = value;
		this.next = null;
	}
}
class LinkedList{
	constructor(value){ // the value to start off the list
		this.head = {
			value: value,
			next: null
		}
		this.tail = this.head;
		this.length = 1;
	}
	append(value){
		const newNode = new Node(value);  // a) Create a new Node object
		this.tail.next = newNode; // 1) making this value we're passing in within the new Node the next element after the head
		this.tail = newNode;  // 2) updating this newNode value to become the tail, once it's the last element on the list
		this.length++;
		return this;  //b) return "this"
	}

	prepend(value){
		const newNode = new Node(value); // a) Create a new Node object
		newNode.next = this.head;     // Making the head to point to the newNode.next
		this.head = newNode;		  // making this newNode the new head 
		this.length++;
		return this;  //b) return "this"
	}

	printList(){
		const array = [];	// define an array constant that is going to be returned
		let currentNode = this.head; // grab the first node of the list - the head (which is our traversal start point) and store it into a variable "current Node"
		while(currentNode !== null){	// as long as the current Node isn't empty we push the values to the array and keep moving to the right till we reach the tail	
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return array;
	}
	
	insert(index,value){ // insert at this location(index), this value(value) into the list
		if(index >= this.length)  // if the given index is greater or equal to the list current length so we append the given value straight away at the end of the list
			return this.append(value);

		const newNode = new Node(value);  // a) Create a new Node object
		const leader = this._traverseToIndex(index-1);  // b) Traverse to find the element at the index before to the given one
		const onHold = leader.next;  // 1) grab the element that comes after the element we found and store it somewhere
		leader.next = newNode;		 // 2) place the new value at the given index 
		newNode.next = onHold;		 // 3) place the element that we stored next to the new value 
		this.length++;				 // 4) Increase the length and return the list
		return this.printList();
		
	}
	
	remove(index){
		const leader = this._traverseToIndex(index-1); // Traverse to find the element at the index before to the given one
		const nodeToremove = leader.next;  // 1) grab the element that comes after the element we found (which is the one we want to delete) and we store it somewhere
		leader.next = nodeToremove.next;   // 2) grab the of the element that comes after the element we want to delete and place it at its place
		this.length--;					   // Decrease the length and return the list
		return this.printList();
	}

	_traverseToIndex(index){  // traversal to find an index and return its value. traversal = travel across or through.
		//check for params
		let counter = 0;			 // define a counter variable which starts from 0
		let currentNode = this.head; // grab the first node of the list - the head (which is our traversal start point) and store it into a variable "current Node"
		while(counter !== index){    // as long as the current Node isn't empty we keep traversing till we reach the node we're looking for
			currentNode = currentNode.next; 
			counter++;
		}
		return currentNode;  //return this node
	}
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.printList();

myLinkedList.prepend(1);
myLinkedList.printList();

myLinkedList.insert(200,99);
myLinkedList.printList();

myLinkedList.insert(2,99);
myLinkedList.printList();
// 1-->10-->99-->5-->16-->1-->99 

myLinkedList.remove(1);
myLinkedList.remove(4);

//myLinkedList.insert(2, 99);  //// 1-->10-->99-->5-->16
//console.log(myLinkedList);


/*  OBJECT								CLASS
const newNode = {				class Node {
	value: value,					constructor(value){
	next: null							this.value = value;
}										this.next = null;
									}
								}
								const newNode = new Node(value);	
*/