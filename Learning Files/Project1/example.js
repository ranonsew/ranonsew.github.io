// issue here, used id instead of class, should use class
// const sub1 = document.getElementById("subtract");
// const resetCount = document.getElementById("reset");
// const plus1 = document.getElementById("add");
// sub1.addEventListener("click", () => {
//     let x = parseInt(document.getElementById("counter").innerText,10);
//     x -= 1;
//     document.getElementById("counter").innerHTML = x;
// });   
// resetCount.addEventListener("click", () => {
//     document.getElementById("counter").innerHTML = 0;
// });   
// plus1.addEventListener("click", () => {
//     let x = parseInt(document.getElementById("counter").innerText,10);
//     x += 1;
//     document.getElementById("counter").innerHTML = x;
// });   
// ------------------------------------------------------- //
// freecodecamp ans
// much better since it would work well with larger number of buttons if they existed, since using foreach instead of hardcoding


let count = 0;

const counter = document.querySelector("#counter"); // query selector on id
const buttons = document.querySelectorAll(".btn"); // query selector on class

buttons.forEach(function(btn){ // loop through array of buttons
    btn.addEventListener("click", function(e){ // add eventlistener for each btn
        const current = e.currentTarget.classList; 
        // current target for event, get class list, which is tied to the btns
        // e is the event object, to check which btn is clicked

        // console.log(btn); // logs the btn that is clicked
        // console.log(e); // logs the mouseevent that clicked the button
        // console.log(e.currentTarget); // logs the current target of the mouseevent click, which is the btn that is clicked
        // console.log(current); // logs the classlist of the btn that is clicked

        if(current.contains("subtract")){ // if in the classlist...
            count--;
        }else if(current.contains("add")){
            count++;
        }else{
            count=0;
        }

        if(count > 0){
            counter.style.color = "green";
            // console.log("green");
        }else if(count < 0){
            counter.style.color = "cyan";
        }else{
            counter.style.color = "black";
        }

        counter.innerText = count; // it is showing already, so not necessary to use .textContent
    });

    btn.addEventListener("mousedown",function(e){
        const current = e.currentTarget.classList;
        console.log("mousedown");
        console.log(current);

        if(current.contains("subtract")){ // if in the classlist...
            current.remove("btn-outline-primary");
            current.add("btn-outline-success");
        }else if(current.contains("add")){
            current.remove("btn-outline-success");
            current.add("btn-outline-primary");
        }else{
            current.remove("btn-outline-info");
            current.add("btn-outline-warning");
        }
    });

    btn.addEventListener("mouseup",function(e){
        const current = e.currentTarget.classList;
        console.log("mouseup");
        console.log(current);

        if(current.contains("subtract")){ // if in the classlist...
            current.remove("btn-outline-success");
            current.add("btn-outline-primary");
        }else if(current.contains("add")){
            current.remove("btn-outline-primary");
            current.add("btn-outline-success");
        }else{
            current.remove("btn-outline-warning");
            current.add("btn-outline-info");
        }
    });
});