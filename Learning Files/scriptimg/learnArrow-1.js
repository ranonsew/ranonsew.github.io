"use strict";

// some things with arrow functions and regular functions
// Dog() function not working out too well after using strict mode
// so something to do with how I wrote everything out.
// other than that, 2 examples of obj, one using a class, 
    //arrow function vs normal function


// arrow functions vs normal functions
const object_person = {
    name: "jeremy",
    age: 19,
    hello: function() { // obj scoped, this refers to object_person
        console.log(this);
    },
    hello2: () => { // function scoped, this refers to this function as obj
        console.log(this);
    }
}
object_person.hello(); // logs-- name, age, hello, hello2
object_person.hello2(); // logs-- {}
// difference between arrow function and also regular function calling
// this in regular function references the object the method resides in
// this in arrow function has no bindings, 
// this becomes global object (need some time to understand fully)

// how about another example
class example_person_obj {
    constructor(name) {
        this.name = name;
    }
    printNameArrow() {
        setTimeout(() => { // this as in the obj, not setTimeout
            console.log("arrow: " + this.name);
        });
    }
    printNameFunction() {
        setTimeout(function() { // this as in the setTimeout function
            console.log("Function: " + this.name);
        });
    }
}
let bobby_person = new example_person_obj("bobby");
bobby_person.printNameArrow(); // arrow: bobby
bobby_person.printNameFunction(); // function: undefined
// so arrow function references this as the object, rather than the setTimeout it's in
// normal function references this as setTimeout that it's in. 


// some information regarding closure arrow functions
// function Dog() {
//     var self = this;
//     this.breed = "shiba"; // cannot set propertyh breed of undefined (strict mode has no idea who this is)
//     setTimeout(function() {
//         console.log(this.breed);
//         console.log(self.breed);
//     }, 10);
// }
// Dog(); // unable to use keyword this to reference this.breed, needs self
// // only references the function it is in (setTimeout)

// same as the Dog() function, strict mode has no idea what this is
// function Cat(){
//     this.breed = "gray";
//     setTimeout(() => {
//         console.log(this.breed);
//     }, 10);
// }
// Cat(); // arrow function allows for the use of this keyword
// references the outside lexical environment object