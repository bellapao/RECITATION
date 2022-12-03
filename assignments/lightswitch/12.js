const light = document.getElementById('bulb');
light.addEventListener('click',function(e){
   
    e.target.classList.toggle('bulb-on');
})

// toggle(token) => token is a string representing the token you want to toggle 
// toggle (token,force) => turns the toggle into a one-way only operation 

/*  using element.classList

const span = document.querySelector("bulb");
const classes = bulb.classList;

bublb.addEventListener('click',() => {
  const result = classes.toggle("c");
  span.textContent = `'c' ${result ? "added" : "removed"}; classList is now "${classes}".`; 
})
*/
