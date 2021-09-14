class MyArray{
	constructor(){
		this.length = 0;
		this.data = {};
	}

	get(index){
		return this.data[index];
	}

  push(item){
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop(){
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }

  delete(index){
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index){
    for(let i = index; i < this.length - 1; i++){
      this.data[i] = this.data[i+1];  // start from the given index for(example 0), shift all the item to the left. Example: before -> [1,2,3] , after -> [2,3, empty] 
    }
    delete this.data[this.length-1];  // deleting the last empty space
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push("Hi");
newArray.push("you");
newArray.push("she");
console.log(newArray);
newArray.pop();
newArray.delete(0);

console.log(newArray);