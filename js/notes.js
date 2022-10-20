/* PRESS ME BUTTON = POPUP BOX */

const button = 
document.querySelector("button");

function greet(){

    const name = prompt ("What is your name?");
/* window.prompt => popup box */

    alert(`Hello ${name}, nice to meet you!
    Have a good day!
    `);
/* window.alert => display anotheer popup containing the string*/

/* Template literal (string) uses backtick ` and allows the string to 
include variables in it, wrapped inside ${} => varible value will be inserted.

Template literals respect line breaks in the source code
*/
}

button.addEventListener("click", greet);
/* addEventListener (type: string, listener, options)
   addEventListener sets up a function that will be called whenever the specified event is delievered to the target
   
   adding the function to the button = when button is clicked the "greet" function will occur
   */

//ABORTABLE EVENT LISTENER

const controller = new AbortController();
const el = 
document.getElementById("outside");
el.addEventListener("click",modifyText,{
    signal: controller.signal
});
// function to change the content of t2
function modifyText(){
    const t2 = document.getElementById("t2");
    if(t2.firstChild.nodeValue === "three"){
        t2.firstChild.nodeValue = "two";
    } else{
        t2.firstChild.nodeValue = "three";
        controller.abort(); //remove listener after value reaches "three"
    }
//after the second row's content changes to three, we call abort() 
//=> results in the value remaining as "three" forever bc we no longer have any code listening for a click event 
}

//EVENT LISTENER WITH MULTIPLE OPTIONS

//"passive" to assert that the handler will not call "preventDefault()")
// "once" to ensure that the event handler will only be called once

const buttonToBeClicked = 
document.getElementById("example-button");

const resetButton = 
document.getElementById("reset-button");

// the text that the button is initialized with 
const initialText = 
buttonToBeClicked.textContent;

//the text that the button contains after being clicked
const clickedText = "BOO! You have clicked this button.";

//we hoist the event listener callback function
//to prevent having duplicate listeners attatched
function eventListener(){
    buttonToBeClicked.textContent = clickedText;
}

function addListener (){
    buttonToBeClicked.addEventListener(
        "click",eventListener,{
            passive: true,
            once: true
        }
    );
}

//when the reset button is clicked, the example button is reset
//and allowed to have its state updated again 

resetButton.addEventListener(
    "click", ()=>{
        buttonToBeClicked.textContent = 
        initialText;
        addListener();
    }
);
addListener();

//WEATHER FORECAST APPLICATION EXCERRCISE IN SWITCH STATEMENTS

const select=
document.querySelector('select');
const para = document.querySelector('p');
select.addEventListener('change', setWeather);
// adding an event listeneerr to select so that when its value is changed, the function runs

function setWeather (){
    const choice = select.value;

    if (choice==='sunny'){
        para.textContent = "It's sunny outside";
    } else if (choice === 'rainy'){
        para.textContent = "Rain is falling outside. Don't forget your umbrella";
    } else if (choice === 'snowing'){
        para.textContent = "The snow is coming down in a flurry";
    } else if (choice === 'overcast'){
        para.textContent = "It isn\'t raining, but the sky is gloomy";
    } else {
        para.textContent = '';
    }
// ternary operator example 

const select = document.querySelector('select');
const html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.addEventListener('change', () => select.value === 'black'
  ? update('black', 'white')
  : update('white', 'black')
);
}
// arrow and anonymous funciton example

const textBox=
document.querySelector("#textBox");
const output = 
document.querySelector("#output");

textBox.addEventListener('keydown',(event)=> output.textContent =`You pressed "${event.key}."`);


