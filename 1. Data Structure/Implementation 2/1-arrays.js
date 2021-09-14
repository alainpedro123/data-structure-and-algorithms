var lettersArray = [];
var word = "alain";
var reverseWord = "";

// Pushing the letters of the „word” string  inside of the Array
for(var i = 0; i < word.length; i++){
	lettersArray.push(word[i])
}

console.log(lettersArray);

// Popping off letters from the lettersArray and storing them inside the "reverseWord" string.
//.pop() -> remove the first element (from the right side) of the array.

for(var i = 0; i < word.length; i++){
	reverseWord += lettersArray.pop()
}

console.log(reverseWord);
console.log(lettersArray);