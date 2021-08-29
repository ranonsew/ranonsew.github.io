"use strict";

// promises, can include some stuff about promise chaining, but haven't yet
// comparison with callbacks, promises are apparently asynchronous in nature
// Fetch api is based on js promises, and will be in a separate file after
    // async await is finished in learning (or at least the concept is understood with some examples)



// JS Promises -- resolving things with promises, .thens and error catching
// fetch api as well (since it is built on JS promises)
// example of a basic promise
const x_promise = new Promise((resolve, reject) => {
    let x = 0;
    if(x == 0) {
        resolve("OK");
    } else {
        reject("NOT OK");
    }
});
x_promise.then(
    (value) => { console.log(value); },
    (error) => { console.log(error); }
);

// how about comparisons of callbacks and promises, followed by async await?

// example from web dev simplified, converting callbacks to promises
// sidenote: promises to replace callbacks, make it easier to program
// and make it easier for programmers to read

// some variables used for the following functions to work
// userLeft true means we should get :(, userWatchingCatMeme true means we should get <
// both false means that we get Subscribe!
const userLeft = false;
const userWatchingCatMeme = true;

//so first the callback function
function watchTutorialCallback(callback, errorCallback) {
    if(userLeft) {
        errorCallback({
            name: "User Left",
            message: ":("
        });
    } else if(userWatchingCatMeme) {
        errorCallback({
            name: "User Watching Cat Memes",
            message: "WebDevSimplified < Cat"
        });
    } else {
        callback("Thumbs up and Subscribe!");
    }
}
// some code to run the callback
watchTutorialCallback((message) => {
    console.log("Success: " + message);
}, (error) => {
    console.log(error.name + " " + error.message);
});


// so now how about the promise version of this callback?
function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if(userLeft) {
            reject({
                name: "User Left",
                message: ":("
            });
        } else if(userWatchingCatMeme) {
            reject({
                name: "User Watching Cat Memes",
                message: "WebDevSimplified > Cat"
            });
        } else {
            resolve("Thumbs up and Subscribe!");
        }
    });
}
// the code is almost exactly the same, so now we are returning a promise instead of callbacks
// callback calling code is changed to use .then and .catch for the resolve and reject statements
watchTutorialPromise().then((message) => {
    console.log("Success: " + message);
}).catch((error) => {
    console.log(error.name + " " + error.message);
})
// the reason for using promises over callbacks, first code is cleaner, 
// with callbacks nested, there will be continually being nested, leading to a callback in a callback in a callback, leading to callback hell
// instead we just use a .then or a .catch, not needing all the indentations

// okay so there is another example of using JS Promises by webdevsimplified
// 3 simple resolved promises
const recordVid1 = new Promise((resolve, reject) => {
    resolve("Video 1 recorded");
});
const recordVid2 = new Promise((resolve, reject) => {
    resolve("Video 2 recorded");
});
const recordVid3 = new Promise((resolve, reject) => {
    resolve("Video 3 recorded");
});
// if I want to do something after all 3 are recorded, we can use promise.all
Promise.all([
    recordVid1, 
    recordVid2, 
    recordVid3
]).then((messages) => {
    console.log(messages); // console logged the array when all 3 of these finished
}); // we can't see it with this example, but all these are asynchronous and run at the same time, so if vid1 is slow, then vid2 and vid3 will finish first
    // like if calling a databse or smth

// what if we want to call a message when only 1 completes?
Promise.race([
    recordVid1,
    recordVid2,
    recordVid3
]).then((message) => {
    console.log(message);
});
// this leads well into async await probably
