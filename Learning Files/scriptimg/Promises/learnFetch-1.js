"use strict";
// import fetch from "node-fetch";

// some fetch api stuff that is related to both promises, and also async await


// fireship example, also test fetch using liveserver and tester.html, 
// quokka no like fetch, and I think it's because it is a browser api

const promise1 = fetch("https://jsonplaceholder.typicode.com/todos/1");
// fetch allows us to hit an http endpoint and 
// have the response return to us as a promise (obj) of the (actual) response

// we can queue in a callback to map the response to json
// can chain promises, as seen here, mapping to json is also a promise afterall
promise1
    .then(response => response.json())
    .then(user => console.log("😃", user.title))
    .then(user => { // if error detected, .catch will return, see?
        throw new Error("Uh Oh Poo Poo Pee Pee");
        return user;
    })
    .catch(error => console.log("😢", error)); 

console.log("Synchronous console log"); 
// unrelated console log to show the asynchronous nature of promises (like fetch)
// this runs first, followed by the 2 asynchronous promise stuff
