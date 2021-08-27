"use strict";

// basic objects, as well as using classes
// additionally, JSON style objects, and .empty() is also tested there


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

let today = new Date();
console.log(today);

class Headphone {
    constructor(name, type, connectivity, impedance){
        this.name = name;
        this.type = type;
        this.connectivity = connectivity;
        this.impedance = impedance;
    }
    toString(){
        const {x, y, z, a} = this; // doing it like this doesn't work with the "this" object, and only would work with outside created objects.
        console.log(this);
        // return `The ${x} is ${y}-backed, is a ${z} headphone and has an impedance of ${a} ohms.`; 
        return `The ${this.name} is ${this.type}-backed, is a ${this.connectivity} headphone and has an impedance of ${this.impedance} ohms.`; 
        // using `` instead of '' or "" is equivalent to python f-strings
    }
}
const shp9500 = new Headphone("Philips SHP9500", "open", "wired", "32");
const pro82 = new Headphone("Takstar Pro 82", "closed", "wired", "32");
console.log(shp9500.toString());
console.log(pro82.toString());



// heya apparently there is the in keyword in these parts of programming
// ima try to use the JSON styling
const inKeyword_personTestObj = {
    "name": "Random Person", // apparently JSON things work well still, great!
    "age": 25,
    "empty": "",
    "undefined": undefined
};
// some example if statements to go with it to test the in keyword
if(inKeyword_personTestObj.name){ // "name" still works, why wasn't I expecting it lmao
    console.log("hey");
    //this works
}
if(inKeyword_personTestObj.empty){
    console.log("yo"); // "" returns false, like null or undefined
}
if(inKeyword_personTestObj.empty != null){
    console.log("konnichiwa");
    // this also works
}
if(inKeyword_personTestObj.undefined != null){ 
    // but what if I want to check if "undefined" exists within inKeyword_personTestObj?
    console.log("anyone there?"); // checking for null doesn't work, since it is null/undefined
}
if("undefined" in inKeyword_personTestObj){ // in keyword to the rescue!
    console.log("thank you in keyword!");
}

