"use strict";

// objs, arr of objs
// using .find, .filter
// item in arr, item of arr
// e.g. emp?.email -- prevents err if emp is null/undefined (because null obj has no .email obviously)
// further explanation in code segments below

// additionally, .map(), .reduce, and spread syntax!
    // spread syntax stuff in WIP learning, .reduce is in that area of learning (by coincidence la)


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

const emp_arr = [
    new Employee("Bob's Burgers", 1453, 25, "bob@yahoo.com.au", "M", "Manager"),
    new Employee("Jennifer Jenn", 1325, 30, "jen@gmail.com", "F", "Manager"),
    new Employee("Lisa Tan", 1398, 27, "lisa.tan@yahoo.com.au", "F", "CEO"),
    new Employee("Bouken da Bouken", 1894, 20, "bennet@hotmail.com", "M", "intern"),
    new Employee("Fujiwara Takumi", 1985, 18, "takumi@fujiwaratofu.org", "M", "driver"),
    new Employee("Ray", 1565, 20, undefined, "M", "person") // example of someone without an email
];

//getting employee emails
const search_name = (empArr, name) => {
    let emp = empArr.find(employee => employee.name === name);
    return emp?.email; 
    // without ? then it returns error if name is null/undefined, or in other words, if emp is null
}
const filter_gender = (empArr, gender) => {
    let emp = empArr.filter(employee => employee.gender === gender);
    const emails = [];
    for(let e in emp){ // for indexes in the array, as apposed to other for loops
        console.log(e);
        emails.push(emp[e].email);
    }
    // for(let e of emp){
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


// ----------------------------------------------------- //
// ----------------------------------------------------- //
// ----------------------------------------------------- //


//useful function, array.map()
const arr = [1,2,3,4];
const squared_arr = [];
for(let i of arr){
    squared_arr.push(i**2);
}
console.log(squared_arr);
const squared_2 = arr.map(x => x**2);
console.log(squared_2);
const squaring = x => x**2;
const squared_3 = arr.map(squaring);
console.log(squared_3);



// trying out the ... thingy, spread syntax and also rest parameters (using self created sum functions)
// first with spread syntax
const sum_spreadSyntax = (a, b, c) => { // only 3 inputs
    return a+b+c;
}
const arr_spreadSyntax_test1 = [1,2,3]; // 3 inputs
const arr_spreadSyntax_test2 = [1,2,3,4]; // 4 inputs
console.log(sum_spreadSyntax(...arr_spreadSyntax_test1));
console.log(sum_spreadSyntax(...arr_spreadSyntax_test2));
// spread syntax, spread out arr or obj into the number of arguments allowed to 
// parse through, so with test2, if there is 4 inputs, but only 3 arguments may pass
// then only the first 3 will pass, with no error, which is nice 

// next with rest parameters, ... is not used as arguments, but as parameter variable
const sum_restParameters = (...nums) => { // all params are input as an arr
    // also implemented here is the array.reduce function, 
    // array.reduce(reducer)
    // reducer = (accumulator, currentValue, index, array) => { ... }
    // also reduce is apparently the hardest JS method, wtf
        
    // notice: nums doesn't need the ... when not in param, num is an arr obj
    console.log(typeof(nums));
    console.log(nums);
    const reducer = (accumulator, currentValue) => {
        console.log(accumulator);
        console.log(currentValue);
        // look at array.reduce go, holy shit.
        return accumulator + currentValue;
    }
    return nums.reduce(reducer);
}
console.log(sum_restParameters(1,2,3,4));
// so rest param don't care how many param you have, it all just becomes an arr
// for instance:
const anotherTest_restParameters = (a,b,...others) => {
    return [a,b,others];
}
console.log(anotherTest_restParameters("a","b","c","d"));

// can use spread syntax like this
let arr_3_new = ["a", "b", "c", "d", "e"];
let arr_4_new = [...arr_3_new, "f", "g", "i"];
// or even
let arr_5_new = ["h", ...arr_4_new, "j"];
// continue spread syntax learning here! -- fireship code this not that
