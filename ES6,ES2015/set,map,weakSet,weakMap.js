// Set stores indivisual values and it stores values/data of diff data types

//Set
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

// Weak Set (stores values in object form)
let carWeakSet = new WeakSet();

let car1 = {
    name:'Honda',
    model:'Corolla'
}
carWeakSet.add(car1);
console.log(carWeakSet)







//  Map stores in key value pairs
//Map
let myMap = new Map([['a','10'],['b','20']]);
myMap.set('c','30');
myMap.delete('a')
console.log(myMap);

//WeakMap
let myWeakMap = new WeakMap();

let ok = {
    id:1,
    name:'John',
    age:10
}

myWeakMap.set(ok);
console.log(myWeakMap)