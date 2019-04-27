// Set stores indivisual values and it stores values/data of diff data types

let arr = [1,2,3,4];
let mySet = new Set(arr);
mySet.add('name');
mySet.add({
    a:10,b:100
})
mySet.delete(3);

console.log(mySet)
console.log(mySet.size)


console.log('printing')
mySet.forEach((item) => {
    console.log(item);
})

//  Map stores in key value pairs

let myMap = new Map()