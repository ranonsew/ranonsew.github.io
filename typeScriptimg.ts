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


// okay so the tsc (typescript compiler) is up and running now, so running
// tsc scriptimg.ts should compile it into js, which means I need to rename this file
// to typeScriptimg.ts

let a_ts = 1; // implicit, compiler assumes a_ts is number only
// a_ts = ""; error
let b_ts:string = "hello"; // strongly explicit typing, we let the compiler know it's string only
