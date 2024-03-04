export class Person {
    constructor(firstName, age ) {
        this.name = firstName;
        this.age = age;
    }

    sayHi(){
        console.log("Hello! my name is " + this.name) ;
    }
}
