// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...

// Without a Dynamic Programming we do way a lot of calculations
let calculations = 0;
function fibanocci(n){ // O(2^n)
  calculations++;
  if(n < 2){
    return n
  }
  return fibanocci(n-1) + fibanocci(n-2);
}


// With Dynamic Programming we do less calculations

function fibanocciMaster(){ // O(n)
  let cache = {} // Object or Hash Table to store our precalculated answers
  return function fib(n){ // in order to not reset "cache" every time we rurn fibanocciMaster so we do closure
    calculations++;
    if(n in cache){
      return cache[n]
    }else{
      if(n < 2){
        return n;
      } else {
        cache[n] = fib(n-1) + fib(n-2)
        return cache[n];
      }
    }
  }
}

// third way to solve this problem. This approach is hard to figure out when to use
function fibonocciMaster2(n){  // Bottom - Up
  let answer = [0, 1];
  for(let i = 2; i <= n; i++){
    answer.push(answer[i-2] + answer[i-1])
  }
  return answer.pop();
}

const fasterFib = fibanocciMaster();

// First way
console.log('Slow', fibanocci(5));
console.log('without DP I did ' +  calculations + ' calculations');

// Second way
console.log('DP', fasterFib(10));
console.log('with DP I did ' +  calculations + ' calculations');

// Third way
console.log('DP2', fibonocciMaster2(10));
console.log('with DP2 I did ' +  '' + ' calculations');