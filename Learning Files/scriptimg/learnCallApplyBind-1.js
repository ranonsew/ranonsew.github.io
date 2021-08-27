"use strict";

// call, apply, bind
// includes some object destructuring and template literal usage



// function call, apply and bind
// no arrow functions here, since they won't work here. Good thing for testing 
// with quokka. 
const clown = {
    name: "bob"
}
const ghost = {
    name: "joshua"
}
function the_face() {
    return this.name;
}
const result = the_face.call(ghost); 
console.log(result);

// another example
const example_obj = {
    name: "Joshua",
    tag: "SlowGhost16"
}
function example_call(a, b) { // arrow functions won't work here
    let { name, tag } = this;
    return `His name was ${tag}, he was a ${name}, he drank ${a} and forgot to sleep before his ${b}.`
}
console.log(example_call.call(example_obj, "alcohol", "driving test"));
function example_apply(arr) {
    let { name, tag } = this;
    return `His name was ${tag}, he was a ${name}, he drank ${arr[0]} and forgot to sleep before his ${arr[1]}.`
}
console.log(example_call.apply(example_obj, ["alcohol", "driving test"]));
let example_bind = example_call.bind(example_obj);
console.log(example_bind("Alcohol", "Driving test"));
