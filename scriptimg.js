// CTRL + K, then press Q. Quokka works now, yay! This also means Node is installed

const yes = "no";
function perhaps(){
    return " 8";
}

const probably = (first, second) => {
    return first + second;
}

console.log(probably(yes, perhaps()));

const myArr = [
    {
        name: "forsaken",
        email: "forsaken@word.exe"
    },
    {
        name: "bob",
        email: "bob@showpls.net"
    },
    {
        name: "polygone",
        email: "polygone@wheresmypolygons.org"
    }
];

console.log(myArr);

console.log("yes");

let number1 = 10, number2 = 12;
let number3 = 11;
number2 = 15;
let numbers123 = number1 + number2 + number3;
numbers123;

// const honda_civic = {brand:"Honda", name:"Civic", typeR:false, year:2018};
// console.log(honda_civic);

const car_arr = [
    {brand:"Honda", name:"Civic", model:"type-R", year:2015},
    {brand:"Toyota", name:"Corolla", model:"AE86", year:1985},
    {brand:"Subaru", name:"WRX", model:"Hawkeye-STI", year:2006},
    {brand:"Mazda", name:"RX-7", model:"FD3S", year:1995},
    {brand:"Mitsubishi", name:"Lancer EVO", model:"III", year:1992},
    {brand:"Nissan", name:"Skyline GTR", model:"R33", year:1996}
];

console.log(car_arr[1].model);

today = new Date();
console.log(today);

class Headphone {
    constructor(name, type, connectivity, impedance){
        this.name = name;
        this.type = type;
        this.connectivity = connectivity;
        this.impedance = impedance;
    }
    toString(){
        return `The ${this.name} is ${this.type}-backed, is a ${this.connectivity} headphone and has an impedance of ${this.impedance} ohms.`; 
        // using `` instead of '' or "" is equivalent to python f-strings
    }
}

const shp9500 = new Headphone("Philips SHP9500", "open", "wired", "32");
const pro82 = new Headphone("Takstar Pro 82", "closed", "wired", "32");
console.log(shp9500.toString());
console.log(pro82.toString());

// next is a program thingy that changes object.values in an array
class Employee {
    constructor(name, id, age, email, gender, role){
        this.name = name; //str -- Jonathan Tan
        this.id = id; //num -- 1543
        this.age = age; //num -- 38
        this.email = email; //str -- Jon@than.com
        this.gender = gender; //str -- M
        this.role = role; //str -- Manager
    }
}

emp_arr = [
    new Employee("Bob's Burgers", 1453, 25, "bob@yahoo.com.au", "M", "Manager"),
    new Employee("Jennifer Jenn", 1325, 30, "jen@gmail.com", "F", "Manager"),
    new Employee("Lisa Tan", 1398, 27, "lisa.tan@yahoo.com.au", "F", "CEO"),
    new Employee("Bouken da Bouken", 1894, 20, "bennet@hotmail.com", "M", "intern"),
    new Employee("Fujiwara Takumi", 1985, 18, "takumi@fujiwaratofu.org", "M", "driver"),
    new Employee("Ray", 1565, 20, undefined, "M", "person") // example of someone without an email
];

// console.log(emp_arr[0].name);
// emp_arr[0].name = "Flamie";
// console.log(emp_arr[0].name);

//getting employee emails
const search_name = (empArr, name) => {
    let emp = empArr.find(employee => employee.name === name);
    return emp?.email; 
    // without ? then it returns error if name is null/undefined
}
const filter_gender = (empArr, gender) => {
    let emp = empArr.filter(employee => employee.gender === gender);
    const emails = [];
    for(e in emp){ // for indexes in the array, as apposed to other for loops
        console.log(e);
        emails.push(emp[e].email);
    }
    // for(e of emp){
    //     console.log(e);
    //     // this is most like python's for in, since it deals not with 
    //     // indexes, but objects themselves
    //     emails.push(e.email);
    // }
    return emails; // doesn't need ? because it returns an empty array even if gender is null/undefined
}

console.log(search_name(emp_arr, "Fujiwara Takumi"));
console.log(filter_gender(emp_arr, "F"));

// say we want to find the email someone who doesn't exist, how? If we parse in a 
// name, we will get an error! Optional Chaining exists my friend, check out
// search_name() function, and see the "?" in emp?.email, that's the ticket
console.log(search_name(emp_arr,undefined));
console.log(filter_gender(emp_arr,undefined));
// undefined is returned since emp does not exist, and thus we cannot find their email

// for functions, optional chaining. If unsure if a method exists for an object/class
// then putting ?. before the () makes sure that no err will be thrown if the 
// function isn't real
emp_arr[1].printName?.(); // without ?. it will return error
//emp_arr[1].printName(); error: emp_arr[1].printName is not a function

//another example, for if one part is undefined or doesn't exist
// if there was an array as a attribute to obj
// say, emp_arr[6].hobbies[0], but no hobbies arr found.
// then use emp_arr[6].hobbies?.[0] to prevent errors


// perhaps some practice into closures is necessary too
const closure_outside = (var_in) => {
    let ok = var_in ?? "poop"; //if var_in is null or undefined, switch to "poop"
    const closure_inside = () => {
        console.log(ok);
    }
    return closure_inside();
}
closure_outside("crap");
closure_outside(); // poop
// nullish coalescing -- setting something to a default if input is undefined or null

const closure_out_2 = (number) => {
    const y_arr = [number, number, number];
    console.log(number);
    const x_arr = [number, number*2, number*3];
    const closure_in_2 = () => {
        for(x of x_arr){
            console.log(x);
        }
        //array.forEach(function(currentValue, index, arr), thisValue)
        //x_arr.forEach((x) => console.log(x));
        y_arr.forEach(function(item){
            console.log(item);
        });
    }
    return closure_in_2();
}
closure_out_2(8);

//----------------------------------------------------------------------//
// closure question that might be difficult for some to understand
for(var lol=0; lol<3; lol++){
    const log = () => {console.log(lol);}
    setTimeout(log, 100);
}console.log(lol); //lol accessible in global scope
// vs
for(let joj=0; joj<3; joj++){
    const log = () => {console.log(joj)};
    setTimeout(log, 100);
} // joj unavailable outside block scope
//why? Because var is global scope, let is block scope.
// i.e. setTimeout saves the reference to var (not the data of it)
// whereas setTimeout saves the data in let (not (just) the reference)
// also the loop happens faster than the setTimeout of 100ms, so 3 setTimeouts are
// stored in the call-stack. 
// so with var, 3 var references are stored in the stack, at the end of the 3 loops,
// var is 3, and therefore the timeouts print 3,3,3
// but with let, data from each let is stored in the stack, so at the end of 3 loops,
// 0,1,2 are stored in the stack, so the timeouts print 0,1,2
//----------------------------------------------------------------------//


// something from fireship that I should understand to improve my understanding
// of functions and closures
function useCat(){
    let name = "baby kitten";
    return [
        () => `Meow ${name}`, // no need for a return statement as js automatically assumes it with this type of statement
        (newName) => name = newName
    ]; // returns an array with 2 functions
}
const [meow, setName] = useCat(); // creating a const array, with meow as the first
                                    // returned array function, and setname as
                                    // the second returned array function
// like so, see meow is now the first returned function
console.log(meow());
// and the second one, sets the current name in the outer closure lexical environment
// to the newName, so when meow() is called, this is returned
setName("tommy");
console.log(meow());



// TODO: I hope at some point I do get to use this practice in making actually
// dynamic web pages that are interesting to use, that way I can do many things
// well

const function_try = (name) => {
    return `you are kinda bad ${name}`;
}

console.log(function_try("someone"));

const object_person = {
    name: "jeremy",
    age: 19,
    hello: function() {
        console.log(this);
    },
    hello2: () => {
        console.log(this);
    }
}

object_person.hello();
object_person.hello2();
// difference between arrow function and also regular function calling
// this in regular function references the object the method resides in
// this in arrow function has no bindings, this becomes global object (need some time to understand fully)

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
// .call links the ghost object to the_face function

console.log(result);


// some information regarding closure arrow functions
function Dog() {
    var self = this;
    this.breed = "shiba";
    setTimeout(function() {
        console.log(this.breed);
        console.log(self.breed);
    }, 10);
}
Dog(); // unable to use keyword this to reference this.breed, needs self
// only references the function it is in (setTimeout)

function Cat(){
    this.breed = "gray";
    setTimeout(() => {
        console.log(this.breed);
    }, 10);
}
Cat(); // arrow function allows for the use of this keyword
// references the outside lexical environment object



//useful function, array.map()
const arr = [1,2,3,4];
const squared_arr = [];
for(i of arr){
    squared_arr.push(i**2);
}
console.log(squared_arr);
const squared_2 = arr.map(x => x**2);
console.log(squared_2);
const squaring = x => x**2;
const squared_3 = arr.map(squaring);
console.log(squared_3);

