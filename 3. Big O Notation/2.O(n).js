// O(n) - Linear: for loops, while loops through n items

// EXAMPLE 1
function funChallenge(input) {
  let a = 10;   //O(1)
  a = 50 + 3;	//O(1)

  for (let i = 0; i < input.length; i++) {  //O(n)
    anotherFunction();    //O(n)
    let stranger = true;  //O(n)
    a++;  //O(n)
  }
  return a;  //O(1)
}

/*
 BIG O(3 + 4n)
 3* O(1) + 4 * 0(n)
This function turns into BIG O(n)
*/



// EXAMPLE 2
function anotherFunChallenge(input) {
  let a = 5;  //O(1)
  let b = 10; //O(1)
  let c = 50; //O(1)
  for (let i = 0; i < input; i++) { //  O(n) - we don't what the input is, this loop is being run "O" of "n" times 
    let x = i + 1;  //O(n)
    let y = i + 2;  //O(n)
    let z = i + 3;  //O(n)

  }
  for (let j = 0; j < input; j++) { //O(n)
    let p = j * 2;  //O(n)
    let q = j * 2;  //O(n)
  }
  let whoAmI = "I don't know";  //O(1)
}

// BIG O(4 + 7n) -> This function turns into BIG O(n)



// EXAMPLE 3

// Adding memory
function booooo(n){
  for (let i = 0 ; i < n.length; i++) {
    console.log('booooooo!')
  }
}

booooo([1,2,3,4,5]);  //0(1)


// returning an array of string "hi" 6 times
function arrayOfHiNTimes(n){
  let hiArray = [];
  for(let i = 0; i < n; i++){
    hiArray[i] = 'hi';  //Adding memory -> each item "hi" is an additional memory space on our computer 
  }
  return hiArray;
}

arrayOfHiNTimes(6); // O(n)



// EXAMPLE 4
function funChallenge(input) {
  let a = 10;   //O(1)
  a = 50 + 3; //O(1)

  for (let i = 0; i < input.length; i++) {  //O(n)
    anotherFunction();    //O(n)
    let stranger = true;  //O(n)
    a++;  //O(n)
  }
  return a;  //O(1)
}



// EXAMPLE 5
function logAll(array) {
  for (let i = 0; i < input.length; i++)  //O(n)
    console.log(array[i]);    //O(n)
}

logAll([1, 2, 3])         // O(3) 3 elements 3 operations 
logAll([1, 2, 3, 4])      // O(4) 4 elements 4 operations
logAll([1, 2, 3, 4, 5])   // O(5) 5 elements 5 operations
