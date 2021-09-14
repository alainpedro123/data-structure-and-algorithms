// HASH TABLE IMPLEMENTATION

class HashTable {
	constructor(size){ //it receives the memory size
		this.data = new Array(size); // another way to instantiate an array
	}

// Hash function - it gets a key and generates a hash for this key according to the string we're passing in (the string length) 
	_hash(key) { // _hash() / the underscore -> private method. This is a standard to let other developers know that this is a private method.
		let hash = 0;
		for (let i = 0; i < key.length; i++){						  // 'AB'.charCodeAt(1) -> A: 65, B: 66
		    hash = (hash + key.charCodeAt(i) * i) % this.data.length  // charCodeAt() - this method returns an integer between 0 and 65535  
		}														      // % -> returns a remainder of two operands.
		return hash;
	}

// this method adds a key at the given value in the table.
	set(key, value){
		let address = this._hash(key); // setting the data we'll inserting in this address space 
		if(!this.data[address]){ //if there's nothing at this address
			this.data[address] = [];
		} 
		this.data[address].push([key, value]);
		return this.data;
	}

	get(key){  // it gets a "key" and returns its value
		let address = this._hash(key); 
		const currentBucket = this.data[address];
		//console.log(currentBucket)
    if(currentBucket){
      for(let i = 0; i < currentBucket.length; i++){
        if(currentBucket[i][0] === key){ //i - start from 0, the first array, and 0 - the zero index, and check it against the key
        		// if the key we received is the same as the key in the current address
          return currentBucket[i][1];  // so return its value - 1 because: 0 -> key and 1 -> value.
        }
      }
    }
    return undefined // nothing in the bucket
	}

	key(){ // it returns the all the keys of the table. 
		const keysArray = [];
		for( let i = 0; i < this.data.length; i++){
			if(this.data[i]){ //if there's something in the data space
      	//keysArray.push(this.data[i][key][value]) -> data[i][0][0], [0][0] -> it means return the key only. 
        		keysArray.push(this.data[i][0][0]); // for data[0] -> push key 0 (the first key) ; for data[1] -> push key 2 (the second key) 
			}
		}
		return keysArray;
	}

  remove(key){
    const index = this._hash(key);
    if (this.data[index].length === 1 && this.data[index][0][0] === key) { // in case there's only one item
      delete this.data[index];
    } else {  // in case there's more than one
      for (let i = 0; i < this.data[index].length; i++) {  
        if (this.data[index][i][0] === key) {
          delete this.data[index][i];
        }
      }
    }
  };
}

const myHashTable = new HashTable(50); // giving the memory space size of 50 - 50 shelvies
myHashTable.set('grapes', 10000)  // [['grapes', 10000]] =  [key, value]
myHashTable.set("apple", 54);
myHashTable.set("oranges", 10);

myHashTable.get('grapes') 

myHashTable.key();

myHashTable.remove("grapes");
myHashTable.key();

// call the hash function
myHashTable._hash("grapes") // -> it generates a key value