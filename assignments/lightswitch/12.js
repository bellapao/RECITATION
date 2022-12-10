const light = document.getElementById('bulb');

const discoRotate = [
  {transform: "rotateY(0deg)",easing:"ease-in"},
  {transform: "rotateY(90deg)"},
  {transform: "rotateY(0deg)"},
  {transform: "rotateY(90deg)"},
  {transform: "rotateY(0deg)",easing:"ease-out"},
]

const discoTiming = {
  duration: 3000,
  iterations: 98,
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
  var disctimeline = disc.animate(discRotate, discoTiming,);
  var disc2timeline = disc2.animate(discRotate2,discoTiming);
  var background = 
    document.querySelector("body").animate({
    backgroundColor: ["red", "yellow", "green","pink","turquoise","purple","#f0ffff"],},
    discoTiming,
    );
  var audio = new Audio ("BoogieWonderland.mp3"); audio.play()
});


let toggle = light.addEventListener('click',function(e){
   e.target.classList.toggle('bulb-on');
    //if (e.target.classList.includes('bulb-on')){
    //discotimeline.pause()}
});

/*
let lightstate = False;
function lightToggle(){
  if (lightState == False){
    //do all the animations
      var discotimeline = discoball.animate(discoRotate, discoTiming,);
      var disctimeline = disc.animate(discRotate, discoTiming,);
      var disc2timeline = disc2.animate(discRotate2,discoTiming);
      var background = 
        document.querySelector("body").animate({
        backgroundColor: ["red", "yellow", "green","pink","turquoise","purple"],},
        discoTiming,);
      var audio = new Audio ("BoogieWonderland.mp3"); audio.play()
  lightState = True;
  }
  else {
    // kill all the animations
    // animate.pause
        audio.pause;
        discotimeline.pause;
        disctimeline.pause;
        disc2timeline.pause;
    lightState = False;
  }
}

discoball.addEventListener("click", audio.pause());
*/