"use strict";


// Async Await on promises -- no need for callbacks, easier js promises
// asynchronous functionality that do not slow down the process cycle
// nice touch when certain items do not require a process before it to finish 
// in order to complete its own things (e.g. b does not need a in order to run, etc)
// async functions return value as promise resolve, and indicate that if there is
// await keyword, that function will continue on a micro task loop so the rest of the code
// can run, before it is done and then called back into the main event loop callstack

// there are micro and macro tasks
// in (single threaded) event loop, when an async task is called, it tells event loop 
// hey, here's a function I need to run, but I need to get some data from a db first. 
// So event loop says okay, and continues doing other things while the data is being called.
// It's done on a separate event loop, and when it's finished, it will let the event loop know
// that it's ready to be called back. 
// Okay so here's the part about micro/macro tasks:
    // if it's setTimeout/setInterval (macro), called back *at* the start of the next event loop
    // else (micro task) and called *before* the start of the next event loop
// thx fireship.io, here's their example
console.log("Synchronous 1");
setTimeout(_ => console.log("Timeout 2"), 0); // queued as a macro task
Promise.resolve().then(_ => console.log("Promise 3")); // queued as a micro task
console.log("Synchronous 4");
// Synch 1, Synch 4, Promise 3, Timeout 2


// async await is essentially syntactical sugar to make promises easier
// i.e. understanding promises is essential to understand async await
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

// so first without async await (only promises)
        // makeRequest("Google").then(response => {
        //     console.log("Response received");
        //     return processRequest(response);
        // }).then(processedResponse => {
        //     console.log(processedResponse);
        // }).catch(error => {
        //     console.log(error);
        // });
// if "Google", then 4 console logs, otherwise, 2 console logs, You'll see em
// not too bad, but can be easier to understand without all the .then().
// e.g. if we need to use the same parameter inside the first and second .then,
// we would need to create a variable called like something="item", then put it into .then()

// okay so how do we make this simpler?
async function doWork() { // need to tell js this func is async, so now it returns a promise
    try {
        let response = await makeRequest("Google"); 
        // await -- code in this function must wait until the makeRequest resolves
        // since this is in async, js leaves this func to do other work in program, 
        // when makeRequest returns a promise of the value into variable response, function will continue to run.
        // stuff in async function only continues to run after awaited stuff has resolved/rejected 
        console.log("Response received");
        let processedResponse = await processRequest(response); // same thing here
        console.log(processedResponse);
    } catch(error) {
        // so for catching errors, we use a try catch block instead
        // if there is an error/reject at any point, we will catch it here
        console.log(error);
    }
}
doWork(); // in terms of code length, async await is shorter and easier to implement
// no need for callback hell, also no need .then() chain of doom
// in the future will most likely have a lot of try catch statements instead lmao