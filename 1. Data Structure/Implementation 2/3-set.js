/* SET implementation using Array with the METHODS below: 
HASITEM - it checks for the presence of an element and returns either true or false. 
VALUES - it returns all values of the Set.
ADD - it adds an element to the set
REMOVE - it removes an item from the set
SIZE - it returns the size of the set
UNION - it combines two sets and returns a new object "unionSet".
INTERSECTION - it grabs and returns the all same items present in the both Sets.
DIFFERENCE - it grabs and returns the all the items that are present in the first Set but NOT in the second.
SUBSET: it checks if a Set is a subset of the another set. The firstSet(A) is a subset of the secondSet(B) if all elements of the firstSet are also elements of the secondSet (A is contained in B). 

*/

class mySet {
	constructor() {
		this.data = []; // Array to store the set
	}
	hasItem(value) {
		return (this.data.indexOf(value) !== -1)
	}

	values() {
		return this.data;
	}

	add(value) { // SET can't have duplicated items.
		if (!this.hasItem(value)) {
			this.data.push(value);
			return this;
		}
		return "This item already exists in the Set";
	}

	remove(value) {
		if (this.hasItem(value)) {
			const index = this.data.indexOf(value); // grabbing the index of the element we wanna remove
			this.data.splice(index, 1);  // SPLICE: "index" - take out an element from the Set by means of the given index. "1" - remove only one element. 
			return true;
		}
		return false;
	}

	size() {
		return this.data.length;
	}

	union(otherSet) {
		const unionSet = new mySet();
		const firstSet = this.values(); // adding all the existing previously inserted values into the First Set
		const secondSet = otherSet.values(); // 
		firstSet.forEach(item => unionSet.add(item));  // for each item of the First Set add all of them to the unionSet
		secondSet.forEach(item => unionSet.add(item)); // for each item of the Second Set add these to the unionSet	
		return unionSet;
	}

	intersection(secondSet) {
		const intersectionSet = new mySet();
		const firstSet = this.values(); // adding all the existing previously inserted values into the First Set
		firstSet.forEach(item => {   // getting each element of the "first set"
			if (secondSet.hasItem(item)) //checking if these elements are in the "second set"
				intersectionSet.add(item); //if yes these elements are added in the "intersectionSet"
		});
		return intersectionSet;
	}

	difference(secondSet) {
		const differenceSet = new mySet();
		const firstSet = this.values();
		firstSet.forEach((item) => {
			if (!secondSet.hasItem(item)) {
				differenceSet.add(item);
			}
		})
		return differenceSet;
	}

	subSet(secondSet) {
		const firstSet = this.values();
		return firstSet.every(item => secondSet.hasItem(item)); // it returns true if all the item of the firstSet are in the secondSet.		
	}

}

const setA = new mySet();
const setB = new mySet();
setA.add("a"); setA.add("b"); setA.add("c"); setA.add("d");
//setB.add("a"); setB.add("b"); setB.add("c"); setB.add("d");

setB.add("a"); setB.add("e"); setB.add("f"); setB.add("d");
//setB.add(1); setB.add(2); setB.add(3); setB.add(4);

setA.values()
setB.values()

setA.hasItem("a")
setB.hasItem(3)

setA.intersection(setB).values();
setA.difference(setB).values();
setA.union(setB).values();
setB.remove("f");
setB.size()
setA.subSet(setB)