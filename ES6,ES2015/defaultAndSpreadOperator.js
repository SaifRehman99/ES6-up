//we can pass the default value here
function getNumbers(num = 11){
    console.log(num);
}
getNumbers();



// The spread operator (...) spreads out the elements of an array (or iterable object). 
// The rest operator condenses elements. The spread and rest operators are great additions to ES6!


// spread operator here

// 1)Adding element in the new array
var arr = [1,2,3,4];
var arr1 = [...arr,5,6,7,8];
console.log(arr1);

// 2)pass elements as an function arguments
function add(a,b,c,d){
    console.log(a+b+c+d);
}
add(...arr);


// 3)copy the array
var arr2 = [...arr];
arr.push(100);
console.log(arr);
console.log(arr2);

// 4)concate array
var arr3 = [...arr,...arr2];
console.log(arr3)
// rest operator here