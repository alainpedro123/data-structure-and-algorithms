// Tree - Binary Search Tree Implementation
// With the following methods: insert, look up, remove

class Node{
	constructor(value){
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BST{
	constructor(){
		this.root = null;
	}
	insert(value){
		const newNode = new Node(value)
		if(this.root === null)
			this.root = newNode;
		else{
			let currentNode = this.root;
			while(true){
				if(value < currentNode.value){ //left
					if(!currentNode.left){
						currentNode.left = newNode;
						return this;
					}
					currentNode = currentNode.left;
				}else{  // right
					if(!currentNode.right){
						currentNode.right = newNode;
						return this;
					}
					currentNode = currentNode.right;
				}
			}
		}
	}

	lookup(value){

	}

	remove(value){

	}
}


const tree = new BST();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
