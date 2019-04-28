function outer(){
    let message = 'Hello World';
    function inner(){
        console.log(message)
    }
    return inner()

}
let msg = outer;
console.log(msg())