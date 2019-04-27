//we can pass the default value here
function getNumbers(num = 11){
    console.log(num);
}
getNumbers();



// The spread operator (...) spreads out the elements of an array (or iterable object). 
// The rest operator condenses elements. The spread and rest operators are great additions to ES6!


// spread operator here
let arr = [1,2,3,4];
let arr1 = [1,2,3,4,3];

function okay(){
    console.log(arr +','+ arr1)
}
okay(...arr,arr1)

// rest operator here