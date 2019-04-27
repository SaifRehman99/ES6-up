//we can pass the default value here
function getNumbers(num = 11){
    console.log(num);
}
getNumbers();



// spread operator here
let arr = [1,2,3,4];
let arr1 = [1,2,3,4,3];

function okay(){
    console.log(arr +','+ arr1)
}
okay(...arr,arr1)