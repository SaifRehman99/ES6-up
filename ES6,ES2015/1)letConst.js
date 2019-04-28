//===============================================var and let=====================================================//

var a = 10
let b = 20;

console.log(a);
console.log(b);


// checking Var Scope Here
function checkVar(){
    var c = 30;
    if(true){
        var c = 40;
        console.log(c);
    } 
    console.log(c);
}

for(var i=0 ; i<10 ; i++){
    console.log(i);
}

console.log('Checking i Value outside the scope')
console.log(i);

checkVar();

// checking let scope here
function checkLet(){
    let d = 50;
    if(true){
        let d = 60;
        console.log(d);
    }
    console.log(d);
}

checkLet();


for(let k=0; k<9 ; k++){
    console.log(i);
}


console.log('Checking i Value outside the scope')
console.log(k);



//============================================================const==================================================//

const numbers = [];


// can update and delete
numbers.push(1);
numbers.push(2);
numbers.push(3);
numbers.push(4);

//but cant re-assign a value here
// numbers = ['99']

console.log(numbers);
