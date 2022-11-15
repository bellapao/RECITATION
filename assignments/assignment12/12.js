const light = document.getElementById('bulb');
light.addEventListener('click',function(e){
   
    e.target.classList.toggle('bulb-on');
})


const dotButton = document.querySelector ('.dot-button').addEventListener('click',dot);
const dashButton = document.querySelector ('.dash-button').addEventListener('click',dash);
const submitButton = document.querySelector ('.submit-button').addEventListener('click',submit);

function dot () {

}

function dash(){

}



function submit() {
    alert(output.textContent);
  }
  
  function reset () {
    //const resetValue = 0000000000;
    output.textContent = outputInt; 
  }
  function minus () {
    if (outputInt > 0) {
        outputInt -= 1;
        output.textContent = outputInt; 
    }
  }
  
  function plus () {
    if (outputInt < 9999999999) {
        outputInt += 1;
        output.textContent = outputInt; 
        //output.textContent = output.textContent + 1
    }
  }
  
  /* 
  if (1 == .----);
  elif (2 == ..---);
  elif (3 == ...--);
  elif (4 == ....-);
  elif (5 == .....);
  elif (6 == -....);
  elif (7 == --...);
  elif (8 == ---..);
  elif (9 == ----.);
  elif (0 == -----);
  /* */

 var Numbers = {
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----"
}