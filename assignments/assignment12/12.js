const light =document.getElementById('bulb');
light.addEventListener('click',function(e){
    e.target.classList.toggle('bulb-on');
})