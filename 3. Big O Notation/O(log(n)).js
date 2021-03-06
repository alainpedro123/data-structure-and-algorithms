// O(log(n)) - logarithmic
function binarySearch(array, key){
  let low = 0;
  let high = array.length - 1;
  let mid;
  let element;

  while(low <= high){
    mid = Math.floor((low + hight) / 2, 10);
    element = array[mid];
    if(element < key){
      low = mid + 1;
    }
    else if(element > key){
      high = mid - 1;
    }else{
      return mid
    }
  }
  return -1;
}
