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
    new Employee("Fujiwara Takumi", 1985, 18, "takumi@fujiwaratofu.org", "M", "driver")
];

// console.log(emp_arr[0].name);
// emp_arr[0].name = "Flamie";
// console.log(emp_arr[0].name);

//getting employee emails
const search_name = (empArr, name) => {
    let emp = empArr.find(employee => employee.name === name);
    return emp.email;
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
    return emails;
}

console.log(search_name(emp_arr, "Fujiwara Takumi"));
console.log(filter_gender(emp_arr, "F"));

// perhaps some practice into closures is necessary too
const closure_outside = (var_in) => {
    let ok = var_in;
    const closure_inside = () => {
        console.log(ok);
    }
    return closure_inside();
}
closure_outside("crap");

const closure_out_2 = (number) => {
    const x_arr = [number, number*2, number*3];
    const closure_in_2 = () => {
        for(x of x_arr){
            console.log(x);
        }
    }
    return closure_in_2();
}

closure_out_2(8);

//----------------------------------------------------------------------//
// closure question that might be difficult for some to understand
for(var i=0; i<3; i++){
    const log = () => {console.log(i);}
    setTimeout(log, 100);
}
// vs
for(let j=0; j<3; j++){
    const logging = () => {console.log(j)};
    setTimeout(logging, 100);
}
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

