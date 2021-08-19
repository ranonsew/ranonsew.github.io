// typescript version of scriptimg and this is a file where I attempt to learn typescript
const no:string = "yes";
console.log(no);
// quokka also works here, so there is not too many issues here yey

// function hoisting also doesn't exist, so can't call something which doesn't exist
// which is a good thing
const noHoistingHere = (y:number) => {
    let x:number = 10;
    return function tsClosure() {
        return x + y;
    }
}
let returnedClosure = noHoistingHere(10);
console.log(returnedClosure());
// so far it looks very similar to javascript, I think should continue reading
// and watching tutorials for javascript and typescript
// get to JS Promises and Async Await, then continue with typescript

/* this works yey
 okay so the tsc (typescript compiler) is up and running now, so running
 tsc scriptimg.ts should compile it into js, which means I need to rename this file
 to typeScriptimg.ts
*/

let a_ts = 1; // implicit, compiler assumes a_ts is number only
// a_ts = ""; error
let b_ts:string = "hello"; // strongly explicit typing, we let the compiler know it's string only
let c_ts:boolean = true;

// this is how an arrow function would look like for arrow func with void
const func_a_ts = ():void => {
    // void means there is no return type in this function
    console.log("func_a_ts" + " " + "here");
}

// implicit typing, will end up as num because we don't specify it and it uses inbuilt Math function
const numPow_ts = (x:number, y:number) => {
    return Math.pow(x, y);
}
console.log(numPow_ts(10, 2)); // number returned
// what about explicit strong typing it into string?
const strPow_ts = (x:number, y:number):string => {
    return Math.pow(x, y).toString();
}
console.log(strPow_ts(10, 2)); // str returned
// also notice how only numbers can be passed to the function (strong typed parameters)


// can also enforce the shape of an object
// can maintain required properties, then add additional properties too
interface Person1 {
    firstName: string,
    lastName: string,
    [key:string]:any // additional properties may be added
}
// if person1 doesn't have firstName or lastName, or they are of wrong type,
// or there's extra in the object (unless additional properties allowed [see above]).
// an error will appear
const person1:Person1 = {
    firstName: "person",
    lastName: "uno"
}
const person2:Person1 = {
    firstName: "Jerry",
    lastName: "Smith",
    fast: true // additional property allowed thanks to [key:string]:any
}

// with strict mode available, it seems that Person already exists out there. ?

// also create own types from scratch, and enforce them for variables
type Style_1 = string;
let font_1: Style_1 = "something";
// above is redundant, what about this next one which has more use?
type Style_2 = 'bold' | 'italic' | 23;
let font_2: Style_2 = "bold"; 
let font_3: Style_2 = 23;
// if not bold or italic or 23, error appears, variable enforcing

// can also enforce arrays like vars
let arr_ts_1:any[] = []; // allow any
let arr_ts_2:number[] = []; // allow number only, etc
let arr_ts_3:Person[] = []; // even objects, let's go, works with Person interface
// we can also do this:
type myList_ts = [number?, string?, boolean?]; 
// ? so that the compiler doesn't show error for empty array, it usually thinks there should be something there otherwise
let arr_ts_4:myList_ts = []; // so now it only allows 1 num, 1 str, 1 bool

// then for something called generics, use a type internally of a class
class Observable<T> {
    constructor(public value:T) {} // strong type the type of the class at later time
}
let obs_ts_1:Observable<number>;
let obs_ts_2:Observable<Person>;
let obs_ts_3 = new Observable(23);