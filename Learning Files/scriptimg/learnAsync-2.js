"use strict";

// a lot of comment info in the first one, and I assume the same for this one
// based on fireship's "the async await episode I promised"

// first let's create a tick counting function (the one used by fireship)
let ticks = Date.now();
const log = (v) => { // annonymous arrow function expression
    console.log(`${v} \n Elapsed: ${Date.now() - ticks}ms`);
    // while loop -- sync 1: ~0ms; Billion complete: ~4000ms; sync 2: ~40001ms
    // Promises (mistake) -- sync 1: ~0ms; sync 2: ~4000ms; Billion complete: ~40001ms
    // promises.resolve().then() (async) -- sync 1: ~0ms; sync 2: ~1ms; Billion complete: ~4000ms
} 
const codeBlock = () => {
        // Blocking code
        // bad because makes function return synchronously, so outside stuff that doesn't
        // rely on this function can't work until billion while loops done
    // let i = 0;
    // while(i < 1000000000) { i++; }
    // return "Billion loops complete";

        // Async blocking code
        // bad because the promise and the while loop still on the main event thread
        // only the resolving of the value happening on the micro task thread
        // sync 2 still has 4000ms because while loop is blocking
        // but it returns before the resolve because the resolve goes onto the micro task 
        // (async await solves this issue I think)
    // return new Promise((resolve, reject) => {
    //     let i = 0;
    //     while(i < 1000000000) { i++; }
    //     resolve("Billion loops complete");
    // });

        // Non-blocking async code, we can use this instead of the above
        // good, because we are using the resolve (which goes into micro task thread)
        // to return the while loop, so since the resolving goes into the micro task thread,
        // so does the while loop that is in the resolving .then()
    return Promise.resolve().then(v => {
        let i = 0;
        while(i < 1000000000) { i++; }
        return "Billion loops complete";
    });
}

// Ideal situation: synchro 1, synchro 2, then delay before codeBlock finally returns
// less than ideal: delay between synchro 1 & 2, because codeBlock didn't async
log("Synchronous 1");
// log(codeBlock()); // use this for non-promises
codeBlock().then(log); // use this for promises
log("Synchronous 2");


// personal (so me doing this) test, can I convert this code block using async await?
const codingBlocker_2 = async () => {
    let i = 0;
    while(i < 1000000000) { i++; }
}
// not sure if this works actually, so I think I need to continue learning to find out
// but I'll leave this here for now




// so promises are asynchronous in nature, and resolve is definitely going to be in the micro task thread type thing
// promises are also difficult to follow if a lot of async events are chained up
// async await is supposed to make promises easier to allow it to be readable like synchronous code
// continued in learnAsync-3.js