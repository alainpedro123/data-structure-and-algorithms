// Methods: add, remove, findMin, findMax, findMinHeight, findMaxHeight, isPresentOnTheThree, isBalanced, inOrder, preOrder, postOrder, levelOrder, lookup


class Node{ //representing each node of the tree
	constructor(data, left = null, right = null){
		this.data = data; // the actual element we want to store
		this.left = left; // it's going to point the left node
		this.right = right; // it's going to point the right node
	}
}

class BinarySearchTree{
	constructor(){
		this.root = null; //at beginning root is empty
	}
	add(data){
		const node = this.root;
		if(node === null){
			this.root = new Node(data); // create a new object for the root
			return;
		} else{
			const searchTree = (node) =>{ // Recursive function: to figure out where to put the new node, either on the right or left side
				if(data < node.data){ //if the element we're passing in is greater than the the existing element (the root)
					if(node.left === null){  // and if the left node is empty
						node.left = new Node(data); // we create new object "node.left" and we store this data in it
						return;
					}else if(node.left !== null){ //  and if the left node is NOT empty
						return searchTree(node.left); // so we return searchTree function. We will continue searching to find where to put this node
					}
				}else if(data > node.data){
					if(node.right === null){
						node.right = new Node(data);
						return;
					}else if(node.right!==null){
						return searchTree(node.right)
					}
				}else{ // meaning that data === node.data, we're not putting this element in the tree.
					return null;
				}
			}
			return searchTree(node);
		}
	}
	findMin(){ //they're always on the left side of the tree
		let current = this.root; //the variable that's gonna go on each node on the left
		while(current.left!==null){
			current = current.left;
		}
		return current.data; //returning the last element located all way on the left side 
	}

	findMax(){ //they're always on the right side of the tree
		let current = this.root;
		while(current.right !== null){
			current = current.right;
		}
		return current.data; //returning the last element located all way on the right side 
	}

	findMinHeight(node = this.root){ // I can the node, but if I don't it's gonna set the "node" to the "this.root"
		if(node === null){
			return -1;
		}
		let left = this.findMinHeight(node.left);
		let right = this.findMinHeight(node.right);
		if(left < right){
			return left + 1;
		} else
			return right + 1;
	}

	findMaxHeight(node = this.root){ // I can the node, but if I don't it's gonna set the "node" to the "this.root"
		if(node === null){
			return -1;
		}
		let left = this.findMaxHeight(node.left);
		let right = this.findMaxHeight(node.right);
		if(left > right){
			return left + 1;
		} else
			return right + 1;
	}

	isPresentOnTheThree(data){  // returning "True" or "false" whether the data is or not on tree
		let current = this.root;
		while(current){ //while there's some data there. While current isn't null: while(current!==null)
			if(data === current.data) // checking if  the actual data is equal the the root
				return true;
			if(data < current.data)  // checking if  the actual data is equal to any data on the left side
				current = current.left;
			else
				current = current.right  // checking if  the actual data is equal to any data on the right side
		}
		return false;
	}

	remove(data){
		const removeNode = (node, data)=>{ //we're passing the node and the data we're trying to remove
			if(node === null) //checking if the node is empty
				return null;

	    //trying to find that data on the three: In case we found the node with the data, we will have 4 options
			 	//1. node has no children, we completely delete this node
			if(data === node.data){  
				if(node.left === null && node.right === null)
					return null;
				//2. node has no left child
				if(node.left === null) 
					return node.right;

				//3. node has no right child
				if(node.right === null) 
					return node.left;

				//4. node has two children: when we re
				var tempNode = node.right;
				while(tempNode.left !== null)
					tempNode = tempNode.left;

				node.data = tempNode.data;
				node.right = removeNode(node.right, tempNode.data);// passing in the node on the right and the temporary data
				return node;
			} else if(data < node.data){
				node.left = removeNode(node.left, data);
				return node;
			} else{
				node.right = removeNode(node.right, data);
				return node;
			}	
		}					// we pass the root node, and the data we're searching for
		this.root = removeNode(this.root, data);  // we're assigning to this.root to whatever is returned to the removeNode function
	}
	isBalanced(){
		return (this.findMinHeight() >= this.findMaxHeight() - 1)
	}

	inOrder(){
		if(this.root === null){
			return null;
		}else {
			let result = new Array();
			function traverseInOrder(node){
				node.left && traverseInOrder(node.left);  // if node.left is true (exists) so run the second command "traverseInOrder"
				result.push(node.data);
				node.right && traverseInOrder(node.right);
			}
			traverseInOrder(this.root);
			return result;
		}
	}

	preOrder(){
		if(this.root === null){
			return null;
		}else {
			let result = new Array();
			function traversePreOrder(node){
				result.push(node.data);
				node.left && traversePreOrder(node.left);
				node.right && traversePreOrder(node.right);
			}
			traversePreOrder(this.root);
			return result;
		}
	}

	postOrder(){
		if(this.root === null){
			return null;
		}else {
			let result = new Array();
			function traversePostOrder(node){
				node.left && traversePostOrder(node.left);
				node.right && traversePostOrder(node.right);
				result.push(node.data);
			}
			traversePostOrder(this.root);
			return result;
		}
	}

	levelOrder(){
		let result = [];
		let queue = [];
		if(this.root != null){
			queue.push(this.root);
			while(queue.length > 0){
				let node = queue.shift(); // taking the element out of the queue and grab it
				result.push(node.data);

				if(node.left != null){
					queue.push(node.left);
				}

				if(node.right != null){
					queue.push(node.right);
				}
			}
			return result;
		}else 
			return null;
	}
}

const myTree = new BinarySearchTree();

myTree.add(9);
myTree.add(4);
myTree.add(17);
myTree.add(3);
myTree.add(6);
myTree.add(22);
myTree.add(5);
myTree.add(7);
myTree.add(20);

/*
		9
	4		17
  3   6		   22
    5   7    20
*/

console.log(myTree.findMaxHeight()); // 3
console.log(myTree.findMinHeight()); // 1
console.log(myTree.isBalanced());    // false

myTree.add(10)
console.log(myTree.findMaxHeight()); // 3
console.log(myTree.findMinHeight()); // 2
console.log(myTree.isBalanced());    // true

/*
		9
	4		 17
  3   6	  10    22
    5   7    20
*/

// Traversing throught the tree
console.log('inOrder: ' + myTree.inOrder());
console.log('preOrder: ' + myTree.preOrder());
console.log('postOrder: ' + myTree.postOrder());

console.log('levelOrder: ' + myTree.levelOrder()); //Breadth First Search

// Minimum Height - is the distance from the root node to the first leaf node without 2 children (which is 17 in this case)
// Maximum Height - is the distance from the root node to the most bottom node