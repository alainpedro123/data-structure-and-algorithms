/* HASH TABLE IMPLEMENTATION with the methods below:

1. _hash - This hash table is a private method, it gets a key and generates a hash for us.
2. set - it adds to the table a key at the given value in the table.
3. get - it receives a "key" and returns its value
4. key - it returns the all the keys of the table. 

*/
// When initializing a HashTable we give the size.
class HashTable{
	constructor(size){
		this.data = new Array(size);
	}

	_hash(key){ // _hash() / the underscore -> private method. This is a standard to let other developers know that this is a private method.
	    let hash = 0;
	    for (let i = 0; i < key.length; i++){						  // 'AB'.charCodeAt(1) -> A: 65, B: 66
	        hash = (hash + key.charCodeAt(i) * i) % this.data.length  // charCodeAt() - this method returns an integer between 0 and 65535  
	    }														      // % -> returns a remainder of two operands.
	    return hash;
  	}

  	set(key, value){
  		let address = this._hash(key);
  		if(!this.data[address]) // if this shelf (data[address]) doesn't exist we actually create it
  			this.data[address] = [];
  		this.data[address].push([key, value]);
  		return this.data;
  	}

  	get(key){
  		let address = this._hash(key);
  		const currentDrawer = this.data[address];
  		if(currentDrawer){
  			for(let i = 0; i < currentDrawer.length; i++){
  				if(currentDrawer[i][0] === key)
  					return currentDrawer[i][1];
  			}
  		}
  		return undefined;
  	}

  	key(){
  		const keysArray = [];
  		for(let i = 0; i < this.data.length; i++){
  			if(this.data[i])
  				keysArray.push(this.data[i][0][0]) // i
  		}
  		return keysArray;
  	}
}

const myHashTable = new HashTable(50); // giving the memory space size of 50 - 50 shelvies
myHashTable.set('grapes', 10000)  // [['grapes', 10000]] 
myHashTable.set("apple", 54);
myHashTable.set("oranges", 10);
myHashTable.get('grapes') 

myHashTable.key();

// call the hash function
//myHashTable._hash("grapes") // -> it generates a key value

