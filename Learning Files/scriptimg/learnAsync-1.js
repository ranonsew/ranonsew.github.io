"use strict";

// WIP, learning concept still before examples are added for practice and re-reading


// Async Await -- no need for callbacks
// asynchronous functionality that do not slow down the process cycle
// which is a nice touch when certain items do not require a process before it
// to finish in order to complete its own things (and things which do await for it)
// so an async function will say that they will do their own things in the process cycle
// then await stuff will be the things awaiting the async to finish so they can be 
// added to the callstack

// there are things that are called micro and macro tasks
// in the (single threaded) event loop, when an asynchronous task is called,
// it tells the event loop, like here's a function I need to run, but I need to get some
// data from a db first. So the event loop says okay, and continues doing other things while the data is being called.
// that is done on a separate event loop, and when that is finished, it will let the event loop know
// that it is ready to be called back, but here's the micro macro task thing
// if it's a setTimeout or setInterval (macro tasks), it will be called back at the start of the next event loop
// else it is a micro task and it is called before the start of the next event loop
// thx fireship.io, here's their example
console.log("Synchronous 1");
setTimeout(_ => console.log("Timeout 2"), 0); // queued as a macro task
Promise.resolve().then(_ => console.log("Promise 3")); // queued as a micro task
console.log("Synchronous 4");
// Synch 1, Synch 4, Promise 3, Timeout 2


// so onto some more async await stuff and promises
// async and await are essentially syntactical sugar to make promises easier
// i.e. understanding promises is essential to understand async and await
// so first, some functions that return promises (web dev simplified) to help us understand with and without async await
function makeRequest(location) { // takes location, and resolves only if "Google" is location
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`);
        if (location === "Google"){ // must be "Google", cannot be "google", etc
            resolve("Google says hi");
        } else {
            reject("We can only talk to google");
        }
    });
}
function processRequest(response) { // this one only resolves, and adds extra info
    return new Promise((resolve, reject) => {
        console.log("Processing response");
        resolve(`Extra information + ${response}`);
    });
}

// so as always, first using the 2 functions without async await (and only promises)
        // makeRequest("Google").then(response => {
        //     console.log("Response received");
        //     return processRequest(response);
        // }).then(processedResponse => {
        //     console.log(processedResponse);
        // }).catch(error => {
        //     console.log(error);
        // });
// if "Google", then 4 console logs, otherwise, 2 console logs, You'll see em
// not too bad, but can be easier to understand without all the .then
// but if we need to use the same parameter inside the first and second .then
// need to create a variable called like something="item"

// okay so how do we make this simpler?
// async await!
async function doWork() { // need to tell js this func is async, so now this func returns a promise
    try {
        let response = await makeRequest("Google"); 
        // await -- code should wait until the makeRequest it finished
        // because this is in async function, js will leave this func to do other work in program, 
        // so when makeRequest is finished executing, 
        // it will return the resolve of makeRequest into the response variable
        // so the stuff in this async function will only continue to run after awaited stuff has resolved or rejected 
        console.log("Response received");
        let processedResponse = await processRequest(response); // same thing here
        console.log(processedResponse);
    } catch(error) {
        // so for catching errors, we use a try catch block instead
        // resolve stuff goes into try, and if there's an error thrown at any point,
        // catch will immediately return the stuff inside here.
        console.log(error);
    }
}
doWork(); // in terms of code length, async await is shorter and easier to implement
// no need for callback pyramid of doom, or callback hell, also no need for then list of doom
// but in the future will most likely have a lot of try catch statements instead lmao
