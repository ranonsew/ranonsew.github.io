// import { log } from "./learnAsync-2.js"; // quokka pro only :(
"use strict";

// manually adding instead lmao
let ticks = Date.now();
const log = (v) => { // annonymous arrow function expression
    console.log(`${v} \n Elapsed: ${Date.now() - ticks}ms`);
} 

// using fireship io getFruit function and makeSmoothie functions as test beds
// to use as examples to remind myself how async await works

// so creating async function
const getFruit = async(name) => { 
    // async means that it will return a promise of the returned value
    // this function will be used as a simulated example of what a promise based api looks like (so sort of like fetch)
    // user passes in fruit name, then function resolves to value of fruit emoji from fruits obj
    const fruits = {
        pineapple: '🍍',
        peach: '🍑',
        strawberry: '🍓'
    }

    // imagine we're making calls from remote apis, with 2s latency
    setTimeout(() => {console.log("")}, 1000); // 2s of latency awaited

    return fruits[name];
    // if no async keyword, can use this to return a promise that resolves to fruits[name]
    // async automatically resolves return value as a promise!
    // real power of async keyword comes when keyword await is used to pause execution of function!
    return Promise.resolve(fruits[name]);
}
getFruit('pineapple')
    .then(res => {console.log(res);});

// time for second async function!
// first we have the promises version of the function to compare it to
    const makeSmoothie0 = () => {
        let first;
        return getFruit("peach") // hard to read sia
            .then(x => {
                first = x;
                return getFruit("strawberry");
            })
            .then(x => [x, first]);
    }

const makeSmoothie1 = async() => {
    // get multiple fruits then return them as single value
    // instead of a bunch of .then callbacks, have a promise resolve to value of a variable
    // await means pause execution of function, until getFruit resolves to a value
        // in which point we can use it as a variable (like first or second)
    const first = await getFruit("peach"); 
    const second = await getFruit("strawberry"); // async makes this resolve as a promise!

    return [first, second, "mS1"]; // easier to see which is which
}
// but there's a big mistake with this makeSmoothie1 function! 
// Failing to run the code concurrently. We are waiting for peach to resolve, then waiting for strawberry to resolve,
// instead of trying to get both concurrently, 
// we only need to have the second value await the first if the second value relies on the first (so async synchro?)
    // like if I need to resolve an id before resolving the password?
makeSmoothie1().then(log);
    // also we're using the above log function to show the latency
    // in case it doesn't show properly, if we imagine getFruit as a remote api that has 1s delay
    // then it takes 1s to get peach, then 1s to get strawberry, so 2s in total to resolve and return


// the whole point of event loop is to prevent the above code blocking
// so how do we make this faster and fix this issue of one after the other awaiting?
// use Promise.all(), async always returns promises anyways!
    // remember, this is async function, don't want to pause function unnecessarily
const makeSmoothie2 = async() => {
    const first = getFruit("peach"); // because of async, this is a promise!
    const second = getFruit("strawberry");
    // Promise.all(), tell above 2 promises (since async) to run concurrently
    // then have resolved values be at that index in array

    const smoothie = await Promise.all([first, second]);
    // return smoothie;
    return [...smoothie, "mS2"]; // easier to see which is which 
    return Promise.all([first, second]); // this is the other option to do it
        // instead of awaiting a bunch of individual promises,
        // add all promises to an array, then await the Promise.all() call
}
makeSmoothie2().then(log);
    // now (if log isn't working because my testing sucks), 
    // we can see that (reminder, imagine getFruit as remote api with 1s delay),
    // it takes 1s to get both peach and strawberry (doubled speed loading)
    // promise.all() basically, return arr when both have resolved on microtask thread



const makeSmoothie3 = async() => {
    const first = getFruit("peach");
    const second = getFruit("strawberry");
    // Promise.race(), first one to finish of the 2 in the arr is the only one called
    const winner = await Promise.race([first, second]);

    // return winner;
    return [winner, "mS3"] // make it easier to see which is which
}
makeSmoothie3().then(log);
    // in this case, since peach is called first, it is loaded ever so slightly faster
    // so it is called as winner. Useful if we only need one of the multiple to finish
    // before resolving the it as the return value



// also, here is an additional benefit of async await, which is error handling
const badSmoothie4 = async() => {
    try {
        const first = getFruit("peach"); // because of async, this is a promise!
        const second = getFruit("strawberry");
        const smoothie = await Promise.all([first, second]);
        
        throw "Smoothie machine broke!";

        return smoothie;
    } catch(err) {
        console.log(err);
        // can catch err & return a value, using try-catch with async await
        // return "oopsie poopsie";
        throw "Broken x2";
    }
}
badSmoothie4() // additional tidbit about console log, logging like this shows it as a key-value pair
    .then(val => {console.log({ val })})
    .catch(err => {console.log({ err })});
// if err in try, catch block will handle it
// if another err in catch, promise.catch() will handle it!



// now for some neat syntactical sugar that comes from using async await > Promises
// or rather, some examples that further show off the potential savings

// so imagine a string of fruit ids that we want to retrieve from a database
const new_fruits = ['pineapple', 'peach', 'strawberry'];
// can use arr.map() to convert them to arr of promises, to resolve all concurrently with Promise.all()
const new_smoothie5 = new_fruits.map(async x => { 
    const emoticon = await getFruit(x);
    log([emoticon, "nS5"]);
    return emoticon;
    // return [emoticon, "nS5"];
    //looks great right? Care needs to be taken when using async await in map or foreach
    // why? won't actually pause function in the context of getFruit
    // normally expected that the func pauses at await getFruit, instead runs promises concurrently so might not be expected behaviour
});

// what if I want to run a loop that awaits a promise at every iteration of loop,
// need to use traditional for loop
const new_smoothie6 = async() => {
    for(let f of new_fruits) {
        const emoticon = await getFruit(f);
        // written like this, pause each step of loop, until promise resolved
        // log(emoticon);
        log([emoticon, "ns6"]);
    }
}
new_smoothie6();

// more often than not, will want to run everything concurrently,
// can use await keyword directly in for loop
let new_fruits_2 = new_fruits.map(x => getFruit(x));
const new_smoothie7 = async() => {
    for await(let f of new_fruits_2) {
        log([f, "nS7"]);
    }
}
new_smoothie7();

// it is also possible to use await keyword directly in conditionals
const fruit_inspection = async() => {
    if(await getFruit('peach') === '🍑') {
        // concise expressions when working with promises
        console.log("looks peachy");
    }
}
fruit_inspection();