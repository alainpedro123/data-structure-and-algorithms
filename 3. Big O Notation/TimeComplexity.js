// Calculating the time the function takes to perform

const nemo = ["nemo"];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'boat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(100).fill('nemo'); // array will nemo

const findNemo = (array) => {
    let t0 = performance.now();
    
    for(let i = 0; i < array.length; i++){
        if(array[i] === "nemo")
            console.log("We've found Nemo!");
    }
    let t1 = performance.now();
    console.log("Call to find Nemo took " + (t1-t0) + 'milliseconds');
}

// testing 3 functions
findNemo(nemo);
findNemo(everyone);
findNemo(large);
