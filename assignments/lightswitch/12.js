const light = document.getElementById('bulb');

const discoRotate = [
  {transform: "rotateY(90deg)", easing:'ease-in'},
  {transform: "rotateY(0deg)"},
  {transform: "rotateY(90deg)"},
  {transform: "rotateY(0deg)"},
  {transform: "rotateY(90deg)", easing: 'ease-out'},
]

const discoTiming = {
  duration: 3000,
  iterations: Infinity,
  fill: "forwards",
};

const discRotate = [
  {transform: "rotateZ(360deg)" },
  {transform: "rotateZ(0deg)"},
]
const discRotate2 = [
  {transform: "rotateZ(-360deg)"},
  {transform: "rotateZ(0deg)"},
]

const discoball = document.querySelector("#discoTest");
const disc = document.querySelector("#disc");
const disc2 = document.querySelector("#disc2");

light.addEventListener('click', () => {
  var discotimeline = discoball.animate(discoRotate, discoTiming,);
  disc.animate(discRotate, discoTiming,);
  disc2.animate(discRotate2,discoTiming);
  //document.getElementById("disc").style.animationName = 'move-right';
  var background = 
    document.querySelector("body").animate({
    backgroundColor: ["red", "yellow", "green","pink","turquoise","purple"],},
    discoTiming,
    );
});


let toggle = light.addEventListener('click',function(e){
   
    e.target.classList.toggle('bulb-on');
    //if (e.target.classList.includes('bulb-on')){
    //discotimeline.stop()}
})
/*
let lightstate = False;
function lightToggle(toggle){
  if (lightState == False){
    //do all the animations
    lightState = True;
  }
  else {
    // kill all the animations
    lightState = False;
  }
}
*/


