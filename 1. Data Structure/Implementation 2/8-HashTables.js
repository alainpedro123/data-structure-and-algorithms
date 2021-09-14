// Hash function
var hash = (string, max) => { 
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i); // each string character has a numerical value associated with it, we're just adding up a character code of each character in the string and putting it into the hash
  }
  return hash % max; // divide by the number of bucket and return the reminder
};

let HashTable = function() {

  let storage = []; // all data we're entering will be stored here
  const storageLimit = 14; // number of the bucket 
  
  this.print = function() {
    console.log(storage)
  }

  this.add = function(key, value) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      storage[index] = [
        [key, value]
      ];
    } else {
      var inserted = false;
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) { // checking if the key already exists
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  };

  this.remove = function(key) {
    var index = hash(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) { // in case there's only one item
      delete storage[index];
    } else {  // in case there's more than one
      for (var i = 0; i < storage[index].length; i++) {  
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };

  this.lookup = function(key) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) { // if the element is equal the key
          return storage[index][i][1];      // then we can return this element
        }
      }
    }
  };

};


console.log(hash('quincy', 10))

let ht = new HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosour');
ht.add('tux', 'penguin')
console.log(ht.lookup('tux'))
ht.print();