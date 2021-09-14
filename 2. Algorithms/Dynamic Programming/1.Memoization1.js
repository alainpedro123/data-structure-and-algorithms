// The way to  cache things

// The way to  cache things
function addTo80(n){
  console.log('long time...');
  return n + 80;
}

/*
addTo80(5);
addTo80(5);
addTo80(5);
*/

// Improving/Optmizing the above function 
let cache = {};
function memoizedAddTo80(n){
  if(n in cache){
    return cache[n]
  }else{
    console.log('long time');
    cache[n] = n + 80;
    return cache[n];
  }
}

console.log('1)', memoizedAddTo80(5));
console.log('1)', memoizedAddTo80(6));  // this function remembers that the parameter has not changed so it doesn't do the calculation again

// VERSUS
console.log('1)', memoized(5));
console.log('1)', memoized(6));