// DOUBLY LINKED LIST

class Node {
	constructor(value){
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}
class LinkedList{
	constructor(value){ // the value to start off the list
		this.head = {
			value: value,
			next: null,
			prev: null
		}
		this.tail = this.head;
		this.length = 1;
	}
	append(value){
		const newNode = new Node(value);
		newNode.prev = 
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}

	prepend(value){
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head.prev = newNode;   
		this.head = newNode;	
		this.length++;
		return this;
	}
	printList(){
		const array = [];
		let currentNode = this.head; // the first item in the list
		while(currentNode !== null){
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return array;
	}
	insert(index,value){ // insert at this location(index), this value(value) into the list
		// check params
		if(index >= this.length)
			return this.append(value);

		const newNode = new Node(value);
		const leader = this.traverseToIndex(index-1);
		const follower = leader.next;
		leader.next = newNode; //get the leader to point to the new node
		newNode.prev = leader; // the new node should now point to the leader
		newNode.next = follower; // the new node should point after it next to the follower
		follower.prev = newNode;  // the follower is now going to point back to the new node
		this.length++;
		return this.printList();
	}
	traverseToIndex(index){  // traversal to find the index. traversal = travel across or through.
		//check for params
		let counter = 0;
		let currentNode = this.head;
		while(counter !== index){
			currentNode = currentNode.next;// keep moving the current node to the right
			counter++;
		}
		return currentNode;
	}

	remove(index){
		//check params
		const leader = this.traverseToIndex(index-1);
		const nodeToremove = leader.next;
		leader.next = nodeToremove.next;
		this.length--;
		return this.printList();
	}
	reverse(){
		if(!this.head.next)
			return this.head;

		let firstItem = this.head;
		this.tail = this.head;
		let secondItem = firstItem.next;

		while(secondItem){
			const temporary = secondItem.next;
			secondItem.next = firstItem;
			firstItem = secondItem;
			secondItem = temporary;
		}
		this.head.next = null;
		this.head = firstItem;
		return this.printList();
	}
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(2,99);
myLinkedList.insert(20,88);
myLinkedList.printList();

myLinkedList.remove(2);
myLinkedList.remove(2);

myLinkedList.reverse();

/*
myLinkedList.prepend(1);
myLinkedList.printList();


myLinkedList.printList();

myLinkedList.insert(2,99);
myLinkedList.printList();
// 1-->10-->99-->5-->16-->1-->99 

myLinkedList.remove(1);
myLinkedList.remove(4);

//myLinkedList.insert(2, 99);  //// 1-->10-->99-->5-->16
//console.log(myLinkedList);
*/
