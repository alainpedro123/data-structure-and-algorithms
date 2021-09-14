// O(n^2)

// EXAMPLE 1

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array){ // O(n^2)
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) { 
      if(array[j] > array[j+1]) {
        //Swap the numbers
        let temp = array[j]
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }        
  }
}

bubbleSort(numbers);
console.log(numbers);



// EXAMPLE 2

// This function gives every possible combination of pairs in the array.
function allPairs(array){ // O(n^2)
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) 
        console.log(array[i] + array[j])
  }
}        

allPairs(['A', 'B', 'C'])             // 9 pairs logged out
allPairs(['A', 'B', 'C', 'D'])        // 16 pairs logged out
allPairs(['A', 'B', 'C', 'D', 'E'])   // 25 pairs logged out 