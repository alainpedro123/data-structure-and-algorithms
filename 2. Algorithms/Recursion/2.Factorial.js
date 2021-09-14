// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

// 5! = 5 * 4 * 3 * 2 * 1

// 1)
function findFactorialRecursive(number){ //O(n)
  if(number === 2)
    return 2;

  return number * findFactorialRecursive(number-1);
}

findFactorialRecursive(5);

// 2)
function findFactorialIterative(number){  //O(n)
  let answer = 1;
  if(number === 2){
    answer = 2;
  }
  for (let i = 2; i <= number; i++){
  	answer = answer * i;
  }
  return answer;
}

 findFactorialIterative(3);