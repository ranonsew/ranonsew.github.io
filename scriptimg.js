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
};
const filter_gender = (empArr, gender) => {
    let emp = empArr.filter(employee => employee.gender === gender);
    const emails = [];
    for(e in emp){
        console.log(e);
        emails.push(emp[e].email);
    }
    return emails;
};

console.log(search_name(emp_arr, "Fujiwara Takumi"));
console.log(filter_gender(emp_arr, "F"));