const hexas = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

const btn = document.querySelector('.btn');
const color = document.getElementById('color');

const randomHex = () => { // use of js expression instead of declaration
    return Math.floor(Math.random() * hexas.length); 
    // math random gives num from 0-1, *hexas len to account for num of hexadecimal
    // floor to round to the closest lower value
}

const randomColor = () => {
    //get 6 random values from hexas
    let hexColor = "#";
    for(let i=0; i<6; i++){ // iterating 6 times for 6 hexs
        // x = randomHex();
        hexColor += hexas[randomHex()];
    }
    // document.body.style.backgroundColor = hexColor;
    // color.textContent = hexColor;
    return hexColor;
}

// btn.addEventListener('click', function(){
//     //get 6 random values from hexas
//     let hexColor = "#";
//     for(let i=0; i<6; i++){ // iterating 6 times for 6 hexs
//         // x = randomHex();
//         hexColor += hexas[randomHex()];
//     }
//     document.body.style.backgroundColor = hexColor;
//     color.textContent = hexColor;
// });

// btn.addEventListener('click', randomColor); 
// don't put brackets in here if doing it this way, otherwise it will start
// with a color change, unless that is what you want

//----------------------------------------------------//
// btn.addEventListener('click', function(){
//     let randColor = randomColor();
//     console.log(randColor);
//     document.body.style.backgroundColor = randColor;
//     // color.textContent = randColor;
//     color.innerText = randColor; //both textContent and innerText work
// }); 
//----------------------------------------------------//

// when putting a function into the addEventListener
// don't () if you want the function to run only when event occurs
// a version where the document.body.style.backgroundColor is separate from 
// randomColor function
// put the () in if you want it to run before the btn is clicked though, seems
// like it just might be useful in the future


//something funny I want to try with btn.addEventListener
//currently line 40-46 is commented out for this to work
// uncomment this & recomment that for the actual code to start working again
// warning: this is just completely for fun.
btn.addEventListener('click',function(){
    for(let i=0; i<10; i++){
        let randColor = randomColor();
        setTimeout(function(){
            console.log(randColor);
            document.body.style.backgroundColor = randColor;
            color.innerText = randColor;
        },1000); // the reason this doesn't work: set timeout delays all the loops by 1s, then all instantly play
        // so like, the plan failed then? Nonsense, it was a success in showing my misunderstandings
        // so that means I need to do some research in order to get this to work in the way that I want it to
    }
});


// but why separate random color choosing and styling of the background?
// for this!
// and also the function can be used more easily elsewhere whenever I feel like it
// and this part is just something to make the button do some weird thing
btn.addEventListener('mousedown', function(){
    // btn.style.backgroundColor = randomColor();
    // btn.style.color = randomColor();
    btn.classList.remove("btn-outline-light");
    btn.classList.add("btn-outline-success");
});
btn.addEventListener('mouseup', function(){
    btn.classList.remove("btn-outline-success");
    btn.classList.add("btn-outline-light");
});