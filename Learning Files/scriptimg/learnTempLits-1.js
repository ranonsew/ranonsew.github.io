"use strict";

// template literals, other than it being useful as f-strings
// 



// tagged template literals, used as a function
// using template literals not just to inject js into str
const tL_custom1 = () => {
    return "Yo! ";
}
const tL_custom2 = (items) => {
    // rest of the string passed through here as an arr, but where's the ${} js?
    console.log(items);
    return "Yo! ";
}
const tL_custom3 = (items, ...info) => {
    // check it out, by increasing the params to the num of js...
    // also using rest params, bit lazy lmao
    console.log(items, info);
    return "Yo! [" + items + "] - [" + info + "]";
}
const tL_custom4 = (items, ...info) => {
    // tL_custom 3 but with actually good return statements
    console.log(items, info);
    return `Yo! ${items[0]} ${info[0]} ${items[1]} ${info[1]}`;
}
const tL_name = "Ranon";
const tL_hobby = "Gaming";
console.log(tL_custom1`I'm ${tL_name} and I like ${tL_hobby}`);
    // tL_custom1, logs out "Yo! " and not rest since rest is not parsed through
console.log(tL_custom2`I'm ${tL_name} and I like ${tL_hobby}`);
console.log(tL_custom3`I'm ${tL_name} and I like ${tL_hobby}`);
console.log(tL_custom4`I'm ${tL_name} and I like ${tL_hobby}`);
// damn template literals, so weird yet they have a bunch of use when it comes to styling components
    // doesn't look like much here but it could be useful to know this in the future
