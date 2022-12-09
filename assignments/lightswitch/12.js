const light = document.getElementById('bulb');


//spin
const discoRotate = [
  {transform: "rotateY(90deg)", easing:'ease-in'
},
  {transform: "rotateY(0deg)"},
  {transform: "rotateY(90deg)"},
  {transform: "rotateY(0deg)"},
  {transform: "rotateY(90deg)", easing: 'ease-out'
},
]

const discoTiming = {
  duration: 3000,
  iterations: Infinity,
  fill: "forwards",
};

const discoball = document.querySelector("#discoTest");
light.addEventListener('click', () => {
  const discotimeline = discoball.animate(discoRotate, discoTiming,);
});


const discRotate = [
  {transform: "rotateZ(360deg)" },
  {transform: "rotateZ(0deg)"},
]
//divElem.style.animationName = 'move-right';

const discball = document.querySelector("#disc");

light.addEventListener('click', () => {
  disc.animate(discRotate, discoTiming,);
});



//click bulb on => toggle  bulb-off => finish animation

light.addEventListener('click',()=> {
  document.querySelector("body").animate({
    backgroundColor: [ "red", "yellow", "green","pink","turquoise" ],}, 
    3000,
    );
})


light.addEventListener('click',function(e){
   
    e.target.classList.toggle('bulb-on');
    if (e.target.classList.includes('bulb-on')){
    discotimeline.stop()
    }
})

//animation.cancel()
//animation.pause()