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

