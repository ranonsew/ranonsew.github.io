"use strict";

// a lot of comment info in the first one, and I assume the same for this one
// based on fireship's "the async await episode I promised"

// first let's create a tick counting function (the one used by fireship)
let tick = Date.now();
const log = v => console.log(`${v} \n Elapsed: ${Date.now() - ticks}ms`); // annonymous arrow function expression
const codeBlock = () => {
    // Blocking code
    // bad because makes function return synchronously, so outside stuff that doesn't
    // rely on this function can't work until billion while loops done
    let i = 0;
    while(i < 1000000000) { i++; }
    return "Billion loops complete";

    // Async blocking code
    // bad because 
    return new Promise((resolve, reject) => {
        let i = 0;
        while(i < 1000000000) { i++; }
        resolve("Billion loops complete");
    });

    // Non-blocking async code
    // good, because 
    return Promise.resolve.then(v => {
        let i = 0;
        while(i < 1000000000) { i++; }
        return "Billion loops complete";
    });
}

// Ideal situation: synchro 1, synchro 2, then delay before codeBlock finally returns
// less than ideal: delay between synchro 1 & 2, because codeBlock didn't async
log("Synchronous 1");
codeBlock().then(log);
log("Synchronous 2");


