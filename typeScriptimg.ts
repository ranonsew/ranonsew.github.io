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

// can also enforce the shape of an object