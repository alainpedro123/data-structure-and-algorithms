// Implementing a Singly Linked List using an object
/* With following methods: 
	PREPEND - to add an element at the beginning of the linked list
	APPEND - to add an element at the end od the list
	PRINT-LIST
	INSERT
	REMOVE
*/

class Node{
	constructor(value){
		this.value = value;
		this.next = null;
	}
}

class LinkedList{
	constructor(value){
		this.head = {
			value: value,
			next: null
		}
		this.tail = this.head;
		this.length = 1;
	}

	append(value){
		const newNode = new Node(value);
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}

  	prepend(value){
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}

  	printList(){
		const array = [];
		let currentNode = this.head;
		while(currentNode){
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return array;
	}

  insert(index,value){
		if(index >= this.length)
			return this.append(value);
		
    const newNode = new Node(value);
		const leader = this.traverseToIndex(index-1);
		const onHold = leader.next;
		leader.next = newNode;
		newNode.next = onHold;
		this.length++;
    return this.printList()
	}

	remove(index){
		const leader = this.traverseToIndex(index-1);
		const nodeToRemove = leader.next;
		leader.next = nodeToRemove.next;
		this.length--;
		return this.printList();
	}

  	traverseToIndex(index){
		let counter = 0;
		let currentNode = this.head;
		while(counter !== index){
			currentNode = currentNode.next;
			counter++;
		}
    return currentNode;
	}
}

const myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.prepend(10);
myLinkedList.append(5);
myLinkedList.insert(15, 6);
// 10-->1-->2-->5-->6

myLinkedList.insert(3, 11);
// 10-->1-->2-->11-->5-->6

myLinkedList.remove(2);
// 10-->1-->11-->5-->6