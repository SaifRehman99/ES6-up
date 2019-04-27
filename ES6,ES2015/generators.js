function *g1 (){
    console.log('Hello');
    yield 'Running 1';
    console.log('World');
    yield 'Running 2';
    console.log('OKay');
    yield 'Running 3';
    
}

let g = g1()
console.log(g.next())
console.log(g.next())

for(let val of g){
    console.log(val)
}