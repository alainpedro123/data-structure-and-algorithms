// 7. (O(n!))

function nFacRuntimeFunc(n) {
  for(let i=0; i<n; i++) {
    nFacRuntimeFunc(n-1);
    console.log(n);
  }
}


nFacRuntimeFunc(5)