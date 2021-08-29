"use strict";


// tick counting function (used by fireship)
let ticks = Date.now();
const log = (v) => { // annonymous arrow function expression
    console.log(`${v} \n Elapsed: ${Date.now() - ticks}ms`);
    // comparisons of what is delay when using various methods in codeBlock()
        // while loop -- s1: ~0ms; Billion: ~4000ms; s2: ~40001ms
        // Promises (mistake) -- sync1: ~0ms; s2: ~4000ms; Billion: ~40001ms
        // promises.resolve().then() (async) -- s1: ~0ms; s2: ~1ms; Billion: ~4001ms
    // we can see how the below code is async or not with these results
} 
const codeBlock = () => {
        // Blocking code
        // bad: makes function return sync, outside stuff that doesn't rely 
        // on this function can't work until billion loops done
    // let i = 0;
    // while(i < 1000000000) { i++; }
    // return "Billion loops complete";


        // Async blocking code
        // bad: promise and while loop still on main event thread
        // only the resolving of the value happens on the micro task thread
        // so sync 2 still has 4000ms because the while loop is blocking it
        // and it can only return before the resolve 
        // because the resolve goes onto the micro task thread
    // return new Promise((resolve, reject) => {
    //     let i = 0;
    //     while(i < 1000000000) { i++; }
    //     resolve("Billion loops complete");
    // });


        // Non-blocking async code, this solves the above issues
        // good, because we are using Promise.resolve 
        // (since as we see above, the resolve goes into the micro task thread)
        // since billion loops only run after the Promise.resolve()
        // the loops are run in the micro task thread, allowing sync2 to run first
    return Promise.resolve().then(v => {
        let i = 0;
        while(i < 1000000000) { i++; } // so this runs on the micro task thread
        return "Billion loops complete"; // does not affect sync2 which comes after
    }); // this is the power of asynchronous js
}

// Ideal situation: synchro 1, synchro 2, then delay before codeBlock finally returns
// less than ideal: delay between synchro 1 & 2, because codeBlock didn't async
log("Synchronous 1");
// log(codeBlock()); // used for non-promises
codeBlock().then(log); // use this for promises
log("Synchronous 2");


// personal (so me doing this) test, can I convert this code block using async await?
const codingBlocker_2 = async () => {
    let i = 0;
    while(i < 1000000000) { i++; }
}
// not sure if this works actually, so I think I need to continue learning to find out
// but I'll leave this here for now (because I absolutely suck ass)



// so promises are asynchronous in nature,
// and resolve is definitely going to be in the micro task thread
// promises are difficult to follow if there are a lot of .then() callbacks
// async await is supposed to make promises more readable (and also asynchronous?)