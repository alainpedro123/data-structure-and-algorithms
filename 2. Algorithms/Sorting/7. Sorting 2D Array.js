// Sorting two dimensional 2D

const list  = [
  // [relevance, price]   // The revelance is integer and the price is string. The sort works only for string
      [5, "4500"], 
      [3, "2100"],
      [1, "3000"] 
];

// SORT BY RELEVANCE
// A)
 const sortByRelevance = list.sort(function(a,b){
    return a[1] - b[1];
  });

// B)
const sortByRelevance2 = list.sort(function(a, b){
    if(a[1] < b[1])
      return -1; 
    
    if(a[1] > b[1])
      return 1; 

    return 1;
})

// SORT BY PRICE

const sortByPrice = list.sort(function(a,b){
    return a[2] - b[2];
 });


 console.log(sortByRelevance2)


 
  // Ascending
 /* if(sortOrder === 1){ // Descending Sort order  
    list.sort(function sortThings(a, b) {
    if (a > b)
      return -1;

    if (b > a) {
      return 1;
    return 0;
    }

    // return a > b ? -1 : b > a ? 1 : 0;
  })}
}/*