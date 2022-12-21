//Views PG
function myFunction(imgs){
    //get the expanded image
    var expandImg = document.getElementById("expandedImg");
    //get the image text
    var imgText = document.getElementById("imgtext");
    //use the same src in the expanded image as the image being clicked on from the grid 
    expandImg.src = imgs.src;
    //use the value of the alt attribute  of the clickable image as the text inside the expanded image
    imgText.innerHTML = imgs.alt;
    //show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}