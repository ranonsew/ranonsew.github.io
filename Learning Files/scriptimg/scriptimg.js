// CTRL + K, then press Q. Quokka works now, yay! This also means Node is installed

"use strict";

// basic js file, most of the important examples have been moved into the learnFiles.js


const yes = "no";
function perhaps(){
    return " 8";
}
const probably = (first, second) => {
    return first + second;
}
console.log(probably(yes, perhaps()));

const myArr = [
    {
        name: "forsaken",
        email: "forsaken@word.exe"
    },
    {
        name: "bob",
        email: "bob@showpls.net"
    },
    {
        name: "polygone",
        email: "polygone@wheresmypolygons.org"
    }
];
console.log(myArr);

console.log("yes");

let number1 = 10, number2 = 12;
let number3 = 11;
number2 = 15;
let numbers123 = number1 + number2 + number3;
numbers123;

    
// so much more info actually, check out "5 more must know js features that almost nobody knows" by web dev simplified, actually real interesting stuff that could be learnt
// at this point this js file, which was supposed to be a testing ground
// will become an information hoarding spot that I read every now and then to find something useful


// additional note down here at the bottom of the script page.
// I think it would be in my own personal interests to split this script into
// various other scripts to be more specific with search terms and
// make studying this file a whole lot easier in the future
// and also organizing the files into various folders so I know what of this
// git repo is my learning, and which is the parts that actually have to do
// with the github.io
// so that would also be helpful to make sure I can understand everything