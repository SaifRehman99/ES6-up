// Classes are here in ES6,we dont need typescript and other

class User {

    // constructors are methods are run when class is instantiated
    constructor(name,email,age){
        this.username = name,
        this.email = email,
        this.age = age

    }

    // we can also create methods in class
    register(){
        console.log(`${this.username} is now registered`);
    }

    // we can also create a static method in which no things are instantiated
    static countUser(){
        console.log(`There are 100 Users`);
    }
}

const user = new User('Saif', 'saifr7493@gmail.com',19);
console.log(user);
console.log(user.register());
console.log(User.countUser())


// We can inherit the class as well