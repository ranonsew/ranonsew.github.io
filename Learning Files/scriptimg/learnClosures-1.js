"use strict";

// closures, fireship.io example
// arr destructuring, (break arr of 2 functions into 2 vars which become name for the functions)
// let vs var setTimeout closure question



// perhaps some practice into closures is necessary too. also foreach and nullish coalescing
const closure_outside = (var_in) => {
    // V-- Nullish Coalescing, returns right hand val if left hand val is undefined or null
    let ok = var_in ?? "poop"; //if var_in is null or undefined, switch to "poop"
    const closure_inside = () => {
        console.log(ok);
    }
    return closure_inside();
}
closure_outside("crap");
closure_outside(); // poop
// nullish coalescing -- setting something to a default (right val) if input (left val) is undefined or null

const closure_out_2 = (number) => {
    const y_arr = [number, number, number];
    console.log(number);
    const x_arr = [number, number*2, number*3];
    const closure_in_2 = () => {
        for(let x of x_arr){
            console.log(x);
        }

        // foreach's parameters
        //array.forEach(function(currentValue, index, arr), thisValue)
        //thisValue = value of "this" or smth, read mozilla thingy for more info, it's a bit weird
        //x_arr.forEach((x) => console.log(x));
        // trying out foreach
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
}// joj unavailable outside block scope
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