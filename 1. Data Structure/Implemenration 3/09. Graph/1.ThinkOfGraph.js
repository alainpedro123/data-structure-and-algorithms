// How to start thinking about Graph
// 1. Edge List

const graph = [[0, 2], [2, 3], [2, 1], [1, 3]];
                // connection: 0 is connected to 2 and so on

// 2. Adjacent List - graph where the index is the node and the value is the nodes neighbors
             //  - The index of the array is the value of the actual Graph node 
const graph = [[2], [2,3], [0,1,3], [1,2] ]
    // index:   0     1       2       3 

// 3. Adjacent Matrix - is simply going to have zeros and ones indicating whether the node X has a connection to node y. Zero means "no" and One means "yes".
const graph = [
  [0, 0, 1, 0],    // node 1 is connected to index of 3
  [0, 0, 1, 1],    // node 2 is connected to index of 2, 3
  [1, 1, 0, 1],    // node 3 is connected to index of 0,1,3
  [0, 1, 1, 0]     // node 4 is connected to index of 1 and 3
]