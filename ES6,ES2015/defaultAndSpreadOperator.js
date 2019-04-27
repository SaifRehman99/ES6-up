//we can pass the default value here
function getNumbers(num = 11){
    console.log(num);
}
getNumbers();



// The spread operator (...) spreads out the elements of an array (or iterable object). 
// The rest operator condenses elements. The spread and rest operators are great additions to ES6!


// spread operator here

var arr = [1,2,3,4];
var arr1 = [...arr,5,6,7,8];
console.log(arr1)
// rest operator here